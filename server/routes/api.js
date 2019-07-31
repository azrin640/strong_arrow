const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');

const productController = require('../controllers/productController');
const validateController = require('../controllers/validateController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const contactController = require('../controllers/contactController');
// const contactController = require('../controllers/contactController');
// const checkoutController = require('../controllers/checkoutController');
// const walletController = require('../controllers/walletController');
// const blogController = require('../controllers/blogController');
// const rateController = require('../controllers/rateController');
// const testController = require('../controllers/testController');

const multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

//  ** USER **
router.post('/user/location', 
   catchErrors(userController.reqLocation)
);

router.get('/user/registration',
    userController.reqValidateRegister,
    validateController.validationErrors,
    catchErrors(userController.userExist),
    catchErrors(userController.register)    
);

router.post('/user/authenticate', 
    validateController.reqValidateLogin,
    validateController.validationErrors,
    catchErrors(userController.authenticate)
);

router.post('/user/login', 
   validateController.reqValidateLogin,
   catchErrors(userController.login)
);

router.post('/user/forgot-password',
    userController.reqValidateForgotPassword,
    validateController.validationErrors,
    catchErrors(userController.forgotPassword)
);

router.post('/user/reset-password',
    userController.reqValidateResetPassword,
    validateController.validationErrors,
    catchErrors(userController.resetPassword)
);

router.post('/user/profile', 
    userController.validateUserId,
    validateController.validationErrors,
    catchErrors(userController.profileUser)
);

router.post('/user/profile/edit',
    userController.reqValidateProfile,
    validateController.validationErrors,
    catchErrors(userController.editProfile)
);

router.post('/user/profile/address',
    catchErrors(userController.addressAutoComplete)
);

router.post('/user/profile/image',
    upload.single('image'),
    userController.checkMimeType,
    userController.resize,
    catchErrors(userController.saveProfileImage)

);

// ** PRODUCT **

router.post('/product/authentication', 
   validateController.serialValidation,
   catchErrors(productController.checkSerialNo)
);

router.post('/product/review', 
   validateController.newReviewValidation,
   catchErrors(productController.reviewProduct)
);

router.post('/product/serial/generate',
   validateController.serialCreateValidation,
   catchErrors(productController.generateSerialNo)
);

router.get('/products/serials',
   catchErrors(productController.getSerials)
);

router.post('/product/serials/rm',
   catchErrors(productController.deleteSerials)
);

router.post('/product/serial/rm',
   catchErrors(productController.deleteSerial)
);

// Contact Form
router.post('/contact/form/save',
   validateController.reqValidateContact,
   catchErrors(contactController.saveContactForm)
);

router.get('/contacts/messages',
   catchErrors(contactController.getContacts)
)

// router.post('/product/category', 
//     catchErrors(userController.isLoggedIn),
//     catchErrors(productController.createCategory)
// );

// router.post('/product',
//     catchErrors(productController.getProduct)
// );

// router.get('/product/:id',
//     catchErrors(productController.getProductById)
// );

// router.post('/product/update/:id', 
//     catchErrors(productController.updateProduct)
// );

// router.post('/product/bulk', 
//     catchErrors(cartController.addBulkProduct)
// )

// router.post('/product/category/delete',
//     catchErrors(productController.deleteProductCategory)
// );

// router.post('/product/category/update', 
//     catchErrors(productController.updateProductCategory)
// );

// router.post('/admin/product/new',
//     upload.single('image'), function (req, res, next){
//         const isFile = req.file.mimetype.startsWith('image/');
//         if(isFile){
//             return next();
//         }else{
//             res.json({status: 406, message: 'Not Acceptable'});
//         }     
//     },
//     catchErrors(productController.resize),
//     catchErrors(productController.createProduct)
// );

// router.post('/admin/product/edit/image',
//     upload.single('image'), function (req, res, next){
//         const isFile = req.file.mimetype.startsWith('image/');
//         if(isFile){
//             return next();
//         }else{
//             res.json({status: 406, message: 'Not Acceptable'});
//         }     
//     },
//     catchErrors(productController.resize),
//     catchErrors(productController.editProduct)
// );

// router.post('/admin/product/edit', 
//     catchErrors(productController.editProductNoImage)
// )

// router.post('/admin/product/delete',
//     catchErrors(productController.deleteProduct)
// )

// // ** PRODUCTS ** 
// router.get('/products/categories', 
//     catchErrors(productController.getProductsCategories)
// );

// router.get('/categories', 
//     catchErrors(productController.getCategories)
// );

// router.get('/products', 
//     catchErrors(productController.getProducts)
// );

// // ** CART **

// router.post('/cart/new',
//     catchErrors(cartController.newCart)
// );

// router.post('/cart/product/add',
//     catchErrors(cartController.addToCart)
// );

// router.post('/cart/create',
//     catchErrors(cartController.createCart)
// );

// router.post('/cart/add',
//     catchErrors(cartController.addProduct)
// );

// router.post('/cart/get', 
//     catchErrors(cartController.getCart)
// );

// router.post('/cart/decrease',
//     catchErrors(cartController.decreaseCart)
// );

// router.post('/cart/increase',
//     catchErrors(cartController.increaseCart)
// )

// router.post('/carts', 
//     catchErrors(cartController.getCarts)
// );

// router.post('/carts/user', 
//     catchErrors(cartController.getCartsByUserId)
// )

// router.post('/carts/getUserRelatedCarts', 
//     catchErrors(cartController.getUserCart)
// );

// router.get('/carts/checkout',
//     catchErrors(cartController.getAllCheckedOutCarts)
// );

// router.post('/cart/approve', 
//     catchErrors(cartController.approveOrder)
// );

// router.post('/cart/delete', 
//     catchErrors(cartController.deleteOrder)
// );

// router.post('/cart/update',
//     catchErrors(cartController.updateCart)
// );

// router.post('/cart/checkout', 
//     catchErrors(cartController.checkoutCart)
// );

// router.post('/cart/payment',
//     upload.single('image'), function (req, res, next){
//         const isFile = req.file.mimetype.startsWith('image/');
//         if(isFile){
//             return next();
//         }else{
//             res.json({status: 406, message: 'Not Acceptable'});
//         }     
//     },
//     catchErrors(cartController.resize),
//     catchErrors(cartController.paymentCart)
// );

// router.post('/cart/payment/billplz',
//     catchErrors(cartController.billplz)
// );

// //  ** CHECKOUT **

// router.post('/checkout',
//     catchErrors(checkoutController.checkout)
// );

// // ** CONTACT **

// router.post('/contact', 
//     contactController.validateMail,
//     catchErrors(contactController.sendMail)
// );

// router.post('/withdraw', 
//     catchErrors(walletController.withdraw)
// );

// // ** BLOG **

// router.post('/admin/blog/category/new',    
//     catchErrors(blogController.addBlogCategory)
// );

// router.get('/admin/blog/categories', 
//     catchErrors(blogController.getCategories)
// );

// router.post('/admin/blog/new', 
//     upload.single('image'), function (req, res, next){
//         const isFile = req.file.mimetype.startsWith('image/');
//         if(isFile){
//             return next();
//         }else{
//             res.json({status: 406, message: 'Not Acceptable'});
//         }     
//     },
//     catchErrors(blogController.resize),
//     catchErrors(blogController.createBlog)
// );

// router.post('/admin/blog/get', 
//     catchErrors(blogController.getBlog)
// );

// router.post('/admin/blog/edit',
//     catchErrors(blogController.editBlogNoImage)
// );

// router.post('/admin/blog/edit/image',
//     upload.single('image'), function (req, res, next){
//         const isFile = req.file.mimetype.startsWith('image/');
//         if(isFile){
//             return next();
//         }else{
//             res.json({status: 406, message: 'Not Acceptable'});
//         }     
//     },
//     catchErrors(blogController.resize),
//     catchErrors(blogController.editBlog)
// );

// router.post('/admin/blog/delete', 
//     catchErrors(blogController.deleteBlog)
// );

// router.get('/admin/blogs', 
//     catchErrors(blogController.getBlogs)
// );

// router.get('/blogs/get', 
//     catchErrors(blogController.getBlogPosts)
// );

// router.post('/blog/get', 
//     catchErrors(blogController.getBlog)
// );

// // RATES

// router.post('/admin/shipping/rate',
//     catchErrors(rateController.newRate)
// );

// router.get('/admin/shipping/rate/get',
//     catchErrors(rateController.getRates)
// )


// // TEST

// router.post('/test', 
//     upload.single('image'), function (req, res, next){
//         const isFile = req.file.mimetype.startsWith('image/');
//         if(isFile){
//             return next();
//         }else{
//             res.json({status: 406, message: 'Not Acceptable'});
//         }     
//     },
//     catchErrors(testController.resize)
// );

module.exports = router;


