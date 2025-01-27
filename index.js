
const express = require('express');
const mongoose = require('mongoose'); 
const cors =require('cors')
const userRoutes = require("./routes/userRoute");
const productRoute = require("./routes/productRoutes")

const app = express();
const port = 2000
 
app.use(express.json());

app.use(cors());
app.use("/user", userRoutes);
app.use("/products", productRoute );

app.get("/", (req, res)=>{
    res.send("API is ready for use")
})

const live_Uri = "mongodb+srv://EngrHenry:engrakpan@cluster.wavse.mongodb.net/SERVER?retryWrites=true&w=majority&appName=Cluster"
const local_Uri = ("mongodb://localhost:27017/SERVER")
mongoose.connect(live_Uri)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error : ", err));
 
 
 
 
app.listen(port, () => console.log('Server is up and running on port 2000'));





// ASSIGNMENT
 
// -deploy your backend application and send me the URL via my mail (on or before Thursday)
// -Upload at least 20 products
// -design a simple landing page 
// -design a simple auth page (user sign up)
// -design a product/catalog page

// deploy the frontend and send me the deploye... by Ogbu Esther Uzoma (Unverified)
// Ogbu Esther Uzoma (Unverified)
// 12:58
// deploy the frontend and send me the deployedURL via my mail on or before Friday 3:30pm
// has context menu