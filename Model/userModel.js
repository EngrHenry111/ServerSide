const mongoose = require("mongoose")
 
 
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      
     },
    email: {
       type: String,
    
      },
    password: {
       type: String ,
      
      },
      products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
      ],
});

  module.exports = mongoose.model('User', userSchema);