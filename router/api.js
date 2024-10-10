const express = require('express');
const profileController = require('../app/controllers/profileController');
const authController = require('../app/controllers/authController');
const {tokenVerifymiddlewares} = require('../app/middleware/tokenVerifymiddlewares');
const router = express.Router();
//User API
router.post('/register', authController.register);
router.post('/login', authController.login);
//Blog Api
router.post('/add-blog',tokenVerifymiddlewares,profileController.addBlog);
router.get('/get-blog',tokenVerifymiddlewares, profileController.getBlog);
router.put('/update-blog/:id',tokenVerifymiddlewares, profileController.updateBlog);
router.delete('/delete-blog/:id',tokenVerifymiddlewares, profileController.deleteBlog);
router.get('/get-blog/:id',tokenVerifymiddlewares, profileController.getSingleBlog);
module.exports = router;