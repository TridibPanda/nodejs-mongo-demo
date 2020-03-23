const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');
const verify = require('../verifyToken/verifyToken');


//users
router.get('/', user_controller.find);
//user
router.get('/:id',verify,user_controller.findbyId);
// creating a new user record
router.post('/signUp', user_controller.createUser);

//Update a user from the database
router.put('/:id',user_controller.update);

//Deletes a user from the database
router.delete('/:id',user_controller.remove);

//login through Email
router.post('/logInEmail',user_controller.logIn);

//login through mobile number
router.post('/logInMobile',user_controller.loginMobile);




module.exports = router;