const { body } = require('express-validator/check');
const { validationResult } = require('express-validator');


// User
exports.reqValidateLogin = [
   body('email').isEmail().normalizeEmail(),
   body('password').not().isEmpty().trim().escape()
];


// Serial
exports.serialValidation = (req, res, next) => {

   
   req.check('serial').not().isEmpty();
   req.sanitizeBody('serial');

   const errors = req.validationErrors();  
   if(errors) res.json(errors);
   return next();
};

exports.newReviewValidation = (req, res, next) => {

   req.sanitizeBody('name');
   req.check('name').not().isEmpty();
   
   req.sanitizeBody('email').normalizeEmail({
       remove_dots: false,
       remove_extensions: false,
       gmail_remove_subaddress: false 
   });
   req.check('email').not().isEmpty();

   req.sanitizeBody('phone');
   req.check('phone').not().isEmpty();

   req.sanitizeBody('review');
   req.check('review').not().isEmpty();

   const errors = req.validationErrors();  
   if(errors) res.json(errors);
   return next();
};

// Middleware to detect any validation error
exports.validationErrors = (req, res, next) => {
   const errors = req.body.validationErrors;
   if (errors) {      
       return res.json({ errors: errors.array(), status: 422 });    
   }
   else return next();
};
