// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Registration route
router.post('/register', authController.registerUser);

// Login route
router.post('/login', authController.loginUser);

// Delete user route
router.delete('/delete', authMiddleware, authController.deleteUser);

module.exports = router;
