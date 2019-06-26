const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passport = require('passport');
const User = mongoose.model('User');
const { promisify } = require('es6-promisify');
const { body, validationResult  } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const crypto = require('crypto');
const mail = require('../handlers/mail');
const axios = require('axios');



// ** Reusable **
exports.validateUserId = [

   body('_id').not().isEmpty().trim().escape()

];

exports.validationErrors = (req, res, next) => {

   const errors = validationResult(req);    

   if (!errors.isEmpty()) {
       return res.status(422).json({ errors: errors.array() });    
   }
   else return next();

};

exports.checkMimeType = (req, res, next) => {
   const isFile = req.file.mimetype.startsWith('image/');
       if(isFile){
           return next();
       }
       else{
           res.json({status: 406, message: 'Not Acceptable'});
       }    
};

exports.resize = async (req, res, next) => {  
   //check if there is no new file to upload
   if (!req.file) {
       return next();
   }
   if(req.file){
       const extension = req.file.mimetype.split('/')[1];
       const fileName = `${uuidv4()}.${extension}`.toLowerCase();
       req.file.fileName = fileName;
       var buffer = req.file.buffer;
       
       //Now resize and upload file/photos to public/uploads
       const photo = await jimp.read(buffer);
       await photo.resize(400, jimp.AUTO);
       await photo.write(`src/assets/uploads/${fileName}`);
       return next();
   }    
};

// ** Registration **
exports.reqValidateRegister = [

   body('username').not().isEmpty().trim().escape(),
   body('email').isEmail().normalizeEmail(),
   body('password').not().isEmpty().trim().escape(),
   body('passwordConfirm').not().isEmpty().trim().escape(),
   sanitizeBody('terms').toBoolean()
                           
];

exports.userExist = async (req, res, next) => {

   const user = await User.findOne({ email: req.body.email });

   if(!user){
      return next();               
   }

   res.json({ status: 400, statusText: 'Email already exist. Please login with your email'});       

};

exports.register = async (req, res) => {

   // const authToken = crypto.randomBytes(20).toString('hex');
   // const authTokenExpire = Date.now() + 3600000; 
   console.log('Saving user ...');
   const user = new User({
      email: 'admin@strongarrowpills.com'
      //  authToken,
      //  authTokenExpire,
      //  terms: req.body.terms
   });

   await user.setPassword('User123');

   const response = await user.save();

   if(response && response._id){

       // Send email for authentication                           
      //  const authURL = `http://${req.headers.host}/auth/login-2/${response.authToken}`;
      //  var options = {
      //      user: {
      //          email: response.email
      //      },
      //      subject: 'Register Account Authentication',
      //      html: `Authenticate your account by pressing clicking <a href="${authURL}"> this link</a></br>
      //          or this link ${authURL}`
      //  };
      //  var sendMail = mail.send(options); 
      console.log(response);
   }

};

// ** Login **
exports.reqValidateLogin = [

   body('email').isEmail().normalizeEmail(),
   body('password').not().isEmpty().trim().escape()
                           
];

exports.authenticate = async (req, res, next) => {

   const authToken = req.body.authToken; 

   const authenticate = User.authenticate();
   const authenticateUser = await authenticate(req.body.email, req.body.password)
       .catch(error => res.json(error));
   const user = authenticateUser.user;

   if(user){
       const tokenExpiry = user.authTokenExpire.getTime();
       const now = Date.now();

       if(tokenExpiry > now){
           const authenticated = await User.findOneAndUpdate({_id: user._id}, {authenticated: true}, {new: true, useFindAndModify: false})
               .catch(error => res.json(error));

           if(authenticated){
               const token = user.generateJwt();
               res.json({id: user._id, token});
           }
           else res.json({ status: 400, statusText: 'Authentication error. Please login again.' });
       }
       else res.json({ status: 401, statusText: 'Your authentication link has already expired. Please register again.' });
   }
   else res.json({ status: 400, statusText: 'Authentication link error. Please register again.' });
};

exports.login = async (req, res) => {

   const authenticate = User.authenticate();
   const authenticateUser = await authenticate(req.body.email, req.body.password)
       .catch(error => res.json(error));
   const user = authenticateUser.user;

   if(user){
       
       const token = user.generateJwt();
       res.json({id: user._id, token});

   }         
   else res.json({ status: 400, statusText: 'Email or password error.'});

}

// ** Forgot Password **
exports.reqValidateForgotPassword = [

   body('email').isEmail().normalizeEmail()
                           
];

exports.forgotPassword = async(req, res) => {

   const user = await User.findOne({ email: req.body.email })
       .catch(error => res.json(error));
    
   if(user) {

       const authToken = crypto.randomBytes(20).toString('hex');
       const authTokenExpire = Date.now() + 3600000; 

       const updatedAuthTokenUser = await User.findOneAndUpdate({_id: user._id}, {authToken, authTokenExpire}, {new: true, useFindAndModify: false})
           .catch(error => res.json(error));        

       if(updatedAuthTokenUser){

           // Send email for password change                           
           const authURL = `http://${req.headers.host}/auth/reset-password-2/${updatedAuthTokenUser.authToken}`;
           var options = {
               user: {
                   email: updatedAuthTokenUser.email
               },
               subject: 'Forgot password authentication',
               html: `
                   <p>IMPORTANT: We have received a request from you to change your password. Please change your password in one hour after receiving this email. If it is not you, please ignore this email.</p>
                   <p>Change your password <a href="${authURL}"> this link</a></br>
                   or this link ${authURL}.</p>`
           };
           var sendMail = mail.send(options); 
           res.json({ status: 200, statusText: 'Success. Please check your email to change your password in one hour before link expired.'});

       }
       else res.json({ status: 400, statusText: 'Fail to generate token, please try again'});
   }
   else res.json({ status: 400, statusText: 'Email does not exist, please register to login.'});        

};

// ** Reset Password
exports.reqValidateResetPassword = [

   body('email').isEmail().normalizeEmail(),
   body('password').not().isEmpty().trim().escape(),
   body('passwordConfirm').not().isEmpty().trim().escape()
                           
];

exports.resetPassword = async(req, res) => {

   const user = await User.findOne({authToken: req.body.token})
       .catch(error => res.json(error));

   if(user){

       const tokenExpiry = user.authTokenExpire.getTime();
       const now = Date.now();

       if(tokenExpiry > now){

           const editedUser = await user.setPassword(req.body.password)
               .catch(error => res.json(error));
           
           if(editedUser){
               const jwtToken = user.generateJwt();
               const id = editedUser._id;
               res.json({status: 200, statusText: 'Password reset successful.', id, jwtToken});
           }
           else res.json({ status: 401, statusText: 'Error resetting password, please try again.' });
           
       }
       else res.json({ status: 401, statusText: 'Your authentication link has already expired. Please re apply forgot password again.' });

   }
   else res.json({status: 400, statusText: 'Email or password or link error, please apply to reset your password again.'});

};

exports.profileUser = async(req, res) => {
   
   const user = await User.findOne({_id: req.body._id})
       .catch(error => res.json(error));

   if(user && user._id) res.json(user);
   else res.json({ status: 400, statusText: 'User does not exist, please register to login.'});  

}

// ** Edit Profile
exports.reqValidateProfile = [

   body('_id').not().isEmpty().trim().escape(),
   body('username').not().isEmpty().trim().escape(),
   body('birthday').not().isEmpty().trim().escape(),
   body('handphone').not().isEmpty().trim().escape(),   
   body('address').not().isEmpty().trim(),
   body('address2').not().isEmpty().trim(),
   body('address2').not().isEmpty().trim().escape(),
   body('city').not().isEmpty().trim().escape(),
   body('state').not().isEmpty().trim().escape(),
   body('postcode').not().isEmpty().trim().escape(),
   body('country').not().isEmpty().trim().escape()

];

exports.editProfile = async (req, res) => {

   const profile = req.body;
   const user = await User.findOneAndUpdate({_id: req.body._id}, profile, {new: true, useFindAndModify: false})
       .catch(error => res.json(error));
   
   if(user) {
       res.json(user);
   }
   else res.json({ status: 400, statusText: 'Fail to update profile, please try again'});

}

exports.addressAutoComplete = async(req, res) => {
   
   const query = req.body.address;
   console.log(query);

   const geocode = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${apiKey}`);
   console.log(geocode);
}

exports.saveProfileImage = async (req, res) => {
   const user = await User.findOneAndUpdate({_id: req.body._id}, {image: req.file.fileName}, {new: true, useFindAndModify: false})
       .catch(error => res.json(error));
   if(user && user._id) res.json(user);
   else res.json({status: 401, statusText: 'Unauthorized'});

}





