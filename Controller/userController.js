  

//sign up , get one user , get all users , update user , delete user

const UserModel = require("../Model/userModel");
 
//create user
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
 
    if (!name && !email && !password) {
      return res.status(400).json({
        message: "all fields must be filled",
      });
    } else if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please enter the valid info",
      });
    }

    exports.UserLogin = async (req, res) =>{
      try {
        const {email} = req.body;

        if(!email){
          return res.status(404).json({
            message: "email is require",
          });
        }
        const user = await UserModel.findOne({email});
        return res.status(200).json({
          message: "logged in",
          data: user
        });
      } catch (error) {
        return res.status(400).json({
          message: "unable to process request",
          error,
        });
      }
    };




 
    const newUser = await UserModel.create({
      name,
      email,
      password,
    });
    return res.status(201).json({
      message: "user signed up",
      data: newUser,
    });
  } catch (error) {
    console.error("unable to sign up", error);
  }
};
 
exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
 
    if (!users) {
      return res.status(400).json({
        message: "couldn't get users , collection is empty",
      });
    }
    return res.status(200).json({
      message: "gotten all users",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      name: error.name,
    });
  }
};
 
//get one method
exports.getOneById = async (req, res) => {
  try {
    const users = await UserModel.findById(req.params.id)
    return res.status(200).json({
      message: "gotten the user",
      data: users,
    });
  } catch (error) { 
    return res.status(400).json({
      message: error.message,
      name: error.name,
    });
  }
};
 
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { password, name } = req.body;
    const update = await UserModel.findByIdAndUpdate(
      id,
      { password, name },
      { new: true }
    );
   
    return res.status(202).json({
      message: "updated",
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to update user",
      error,
    });
  }
};
 
exports.deleteUser = async (req, res) => {
  try {
    const removeUser = await UserModel.findByIdAndDelete(req.params.id);
 
    return res.status(200).json({
      message: "user deleted",
      data: removeUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't delete user",
      error,
    });
  }
};
 
