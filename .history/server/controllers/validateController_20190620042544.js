require('express-validator');

exports.serialValidation = (req, res, next) => {

   req.check('serial').not().isEmpty().sanitizeBody().remove_extensions();

   const errors = req.validationErrors();  
   if(errors) res.json(errors);
   return next();
};

exports.validateRegister = (req, res, next) => {

    req.sanitizeBody('username');
    req.check('username').not().isEmpty();

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
    
    req.sanitizeBody('introducer');

    req.sanitizeBody('password');
    req.check('password').not().isEmpty();

    req.sanitizeBody('cpassword');
    req.check('cpassword').not().isEmpty();
    
    req.sanitizeBody('address1');
    req.check('address1').not().isEmpty();

    req.sanitizeBody('address2');
    req.check('address2').not().isEmpty();

    req.sanitizeBody('postcode');
    req.check('postcode').not().isEmpty();

    req.sanitizeBody('city');
    req.check('city').not().isEmpty();

    req.sanitizeBody('state');
    req.check('state').not().isEmpty();

    const errors = req.validationErrors();  
    if(errors) res.json(errors);
    return next();
};
