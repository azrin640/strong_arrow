require('express-validator');

exports.serialValidation = (req, res, next) => {

   req.sanitizeBody('serial');
   req.check('serial').not().isEmpty();

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