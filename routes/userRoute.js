const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();
//localholst/Users/
router.route('/signup').post(authController.createUser);
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);



module.exports = router;