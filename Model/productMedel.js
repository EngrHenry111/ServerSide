const mongoose = require("mongoose");

const productSchema = new mongoose ({
    productImage: {
        type: String, 
        required: [true, "please upload an image"]
    },
    productTitle: {
        type: String,
        required: true,
    },
    productDetails:{
        type: String,
        required: true,
    },


    price: {
        type: Number,
        required: true,
    },

    status: {

        type: Boolean,
    },
});

const productModel = mongoose.model("products", productSchema )
module.exports = productModel;