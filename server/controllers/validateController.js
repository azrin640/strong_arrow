require('express-validator');
const { check, validationResult } = require('express-validator');


exports.autoCheckInput = (req, res) => {

   if(req.body){

      let construct = Object.keys(req.body)
      .reduce((acc, key) => {

         if(key === 'email'){
            construct.email = check('email');
         }

         return constructs;

      }, {});
      console.log(construct);

      res.json('SUCCESS');

   }
   else res.json('SUCCESS');

}























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