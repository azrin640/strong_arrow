const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { promisify } = require('es6-promisify');
require ('express-validator');
const Serial =  mongoose.model('Serial');
const Review =  mongoose.model('Review');

// Check serial no authentication
exports.checkSerialNo = async (req, res) => {
   
   const product = await Serial.findOneAndUpdate({serial: req.body.serial}, {$inc: {authNo: 1}}, {new: true, useFindAndModify: false})
         .catch(error => res.json(error));
   
   if(product && product._id) res.json(product);
   else res.json({status: 404, statusText: 'Not Found', serial: req.body.serial});
}

exports.reviewProduct = async (req, res) => {
   
   const review = await new Review(req.body).save()
      .catch(error => res.json(error));
   
   res.json(review);
   
}

exports.generateSerialNo = async (req, res) => {
   
   var serial1 = req.body.serial1;
   var serial2 = req.body.serial2;
   var volume  = req.body.volume; 
   var market  = req.body.market;
   var serialNos = [];

   let i = 0;

   while( i < volume )
   {
      let serialNo = new Serial({
         serial: serial1 + serial2,
         market: market
      });

      serialNos.push(serialNo);
      serial2 ++;
      i ++;
   }

   const serials = await Serial.insertMany(serialNos, { ordered: false })
      .catch(error => {
         res.json(error);
         return;
      });
      res.json(serials);

}

exports.getSerials = async (req, res) => {
   const serials = await Serial.find().catch(error => {
      console.log(error);
      res.json(error);
      return;
   });

   res.json(serials);
}

exports.deleteSerials = async (req, res) => {
   
   let toDelete = req.body;
   toDelete = req.body.reduce((acc, val) => {
      if(val){
         acc.push(val.id);
      }
      return acc;
   }, []);

   const serials = await Serial.remove({_id: { $in: (toDelete).map(mongoose.Types.ObjectId)}}).catch(
      error => {
         res.json(error);
         return;
      }
   )
   res.json(serials);
}

exports.deleteSerial = async (req, res) => {
   const serial = await Serial.findOneAndRemove({ _id: req.body.id})
      .catch(error => {
         res.json(error);
         return;
      });   
   res.json(serial);
}






// Create Product Category
// exports.createCategory = async (req, res) => {
//     if(req.body.id){
//         const category = {
//             name: req.body.name,
//             description: req.body.description 
//         };
//         const updateCategory = await Category.findOneAndUpdate({_id: req.body.id}, category);
//         if(updateCategory && updateCategory._id){
//             res.json(updateCategory);
//         }    
//     }
//     else{
//         const category = new Category({
//             name: req.body.name,
//             description: req.body.description 
//         });

//         await category.save(function(err, success){
//             if(err){
//                 res.json(err);
//             }
//             if(success){
//                 res.json(success);
//             }
//         });
//     }
    
// }

// // Update Product Category
// exports.updateProductCategory = async (req, res) => {

//     const editedCategory = await Category.findOneAndUpdate(
//         {_id: req.body._id},
//         {
//             name: req.body.name,
//             description: req.body.description
//         },
//         {new: true}
//         );
//     if(editedCategory && editedCategory._id){
//         res.json(editedCategory);
//     };
// }

// // Delete Product Category
// exports.deleteProductCategory = async (req, res) => {
//     if(req.body && req.body._id){
//         const removeCategory = await Category.findByIdAndRemove({_id: req.body._id});
//         if(removeCategory && removeCategory._id){
//             res.json(removeCategory);
//         }
//     }
// }

// exports.getProductsCategories = async (req, res) => {
//     const categories = await Category.find();
//     if(categories){
//         const result = categories.sort(function(a, b){
//             if(a.name < b.name) return -1;
//             if(a.name > b.name) return 1;
//             return 0;
//         });
//         res.json(result);
//     }
//     else{
//         res.json({
//             status: '401', 
//             message: 'No category found'
//         });
//     }    
// }


// //*** CREATE A NEW PRODUCT ***
// // Resize image with Jimp (specify width = 400px)
// exports.resize = async (req, res, next) => {  
    
//     //check if there is no new file to upload
//     if (!req.file) {
//         return next();
//     }
//     if(req.file){
//         const extension = req.file.mimetype.split('/')[1];
//         const fileName = `${uuidv4()}.${extension}`.toLowerCase();
//         this.fileName = fileName;
//         var buffer = req.file.buffer;
        
//         //Now resize and upload file/photos to public/uploads
//         const photo = await jimp.read(buffer);
//         await photo.resize(400, jimp.AUTO);
//         await photo.write(`src/assets/uploads/${fileName}`);
//         return next();
//     }    
// };

// // Validate Product Form
// exports.validateProduct = (req, res, next) => {

//     req.sanitizeBody('category');
//     req.check('category').not().isEmpty();

//     req.sanitizeBody('name');
//     req.check('name').not().isEmpty();

//     req.sanitizeBody('code');
//     req.check('code').not().isEmpty();
    
//     req.sanitizeBody('price');
//     req.check('price').not().isEmpty();

//     req.sanitizeBody('salePrice');
//     req.check('salePrice').not().isEmpty();

//     req.sanitizeBody('description');
//     req.check('description').not().isEmpty();

//     req.sanitizeBody('packagingSize');
//     req.check('packagingSize').not().isEmpty();

//     req.sanitizeBody('packagingWeight');
//     req.check('packagingWeight').not().isEmpty();

//     const errors = req.validationErrors();
//     if(errors){
//         res.json(errors);
//     }
//     return next();
// };

// // Save a new product into db
// exports.createProduct = async (req, res) => {
    
//     var product = new Product({
//         category: req.body.category,
//         name: req.body.name,
//         code: req.body.code,
//         price: req.body.price,
//         salePrice: req.body.salePrice,        
//         description: req.body.description,
//         packagingSize: req.body.packagingSize,
//         packagingWeight: req.body.packagingWeight,
//         delivery: req.body.delivery,
//         image: this.fileName
//     });

//     var savedProduct = await product.save().catch((error) => {
//         res.json(error);
//     });
//     if(savedProduct){
//         res.json(savedProduct);
//     }
    
// };

// // Edit and Save an edited product into db
// exports.editProduct = async (req, res) => {
    
//     var product = {
//         _id: req.body.id,
//         category: req.body.category,
//         name: req.body.name,
//         code: req.body.code,
//         price: req.body.price,
//         salePrice: req.body.salePrice,        
//         description: req.body.description,
//         packagingSize: req.body.packagingSize,
//         packagingWeight: req.body.packagingWeight,
//         image: this.fileName
//     };
    
//     var editedProduct = await Product.findOneAndUpdate({_id: req.body.id}, product, {new: true}).catch((error) => {
//         res.json(error);
//     });

//     if(editedProduct){
//         res.json(editedProduct);
//     }
    
// }

// exports.editProductNoImage = async (req, res) => {
//     var product = {
//         _id: req.body.id,
//         category: req.body.category,
//         name: req.body.name,
//         code: req.body.code,
//         price: req.body.price,
//         salePrice: req.body.salePrice,        
//         description: req.body.description,
//         packagingSize: req.body.packagingSize,
//         packagingWeight: req.body.packagingWeight,
//         image: req.body.image
//     };

//     var editedProduct = await Product.findOneAndUpdate({_id: req.body.id}, product, {new: true}).catch(
//         (error) => {
//             res.json(error);
//         });

//     if(editedProduct){
//         res.json(editedProduct);
//     }
// }

// // *** END CREATE A NEW PRODUCT ***

// exports.deleteProduct = async (req, res) => {
//     var productDeleted = await Product.findOneAndDelete({_id: req.body.id});
//     if(!productDeleted){
//         res.json('Deleted');        
//     }else{
//         res.json({status: 200});
//     }
// }

// exports.getProducts = async (req, res) => {
//     const products = await Product.find(function(err, results){
//         if(err){
//             res.json(err);
//         }
//         if(results){
//             results
//                 .sort((a, b) => {
//                     return a.created - b.created;
//                 })
//                 .reverse();
//             res.json(results);
//         }
//     })
//     .populate('qty');
// }

// exports.getProduct = async (req, res) => {

//     const product = await Product.findOne({_id: req.body.id}, function(err, result){
//         if(err){
//             res.json(err);
//         }
//         if(result){
//             res.json(result);
//         }
//     });
// }

// exports.updateProduct = async (req, res) => {
//     const id = req.params.id;
//     const product = req.body;

//     await Product.findByIdAndUpdate(
//         {_id: id},
//         {   title: req.body.title,
//             price: req.body.price,
//             category: req.body.category,
//             image: req.body.imageUrl
//         }, 
//         {new: true},
//         function(err, result) {
//             if(err){
//                 res.json(err);
//             }
//             if(result){
//                 res.json(result);
//             }
//     });
// };





