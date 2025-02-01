
const userController = require('../Controller/userController');
const express = require('express');

const userRoutes = express.Router();


userRoutes.post('/new-users', userController.createUser);

userRoutes.get('/get-all-users', userController.getAllUsers);
userRoutes.get('/get-one-user/:id', userController.getOneById);
userRoutes.patch('/update-user/:id', userController.updateUser);
userRoutes.delete('/delete-user/:id/', userController.deleteUser);


userRoutes.post("/create-product/:userId")

module.exports = userRoutes