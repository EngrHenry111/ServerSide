const userModel = require("../Model/userModel");
const productModel = ('../Model/productMedel.js');
const cloudinary = ('../config/clourdinary.js');

exports.createProduct = async(req , res)=>{
    try {
     const getUserId = await  userModel.findById(req.params.userId)
        const { productImage,  productTitle ,  productDetails, price } = req.body;
         //const getUserId = await userModel.findById(req.params.userId)

        const upload = await cloudinary.uploader.upload(req.file.path);

        const Product = await productModel.create({
            productImage: upload.secure_url, 
            productTitle ,
            productDetails,  
            price
           
        });
     
        getUserId.products.push(Product?._id);
        getUserId.save();
        return res.status(201).json({
            message : "these are our products", 
            data : Product,
        });
    } catch (error) {
        console.error("couldn't found products here" , error)
    }
      };

      exports.getAllProducts = async (req, res) => {
        try {
          const Products = await productModel.find();
          return res.status(200).json({
            message: 'gotten all Products',
            data: Products,
          });
        } catch (error) {
          return res.status(400).json({
            message: "couldn't get Products",
            error,
          });
        }
      };

      exports.getOneById = async (req, res) => {
        try {
     
          const {id} = req.params
       const products = await productModel.findById({id});
          return res.status(200).json({
            message: 'gotten products',
            data: products,
          });
        } catch (error) {
          return res.status(400).json({
            message: "couldn't get products",
            error,
          });
        }
      };

      exports.deleteProduct = async (req, res) => {
        try {
          const deleteProduct = await productModel.deleteById(req.params);
          return res.status(200).json({
            message: 'products deleted',
            data: deleteProduct,
          });
        } catch (error) {
          return res.status(400).json({
            message: "couldn't delete product",
            error,
          });
        }
      };


      exports.updateProduct = async(req, res)=>{
        try {
          const {id} = req.params
          const {productTitle , price} = req.body
          const updates = await productModel.findByIdAndUpdate(id ,
             {productTitle , price} ,
             {new:true})
          return res.status(202).json({
          message : "product updated",
          data : updates
          });
        } catch (error) {
          return res.status(400).json({
            message : "failed to update product",
            error
          });
        }
    };

