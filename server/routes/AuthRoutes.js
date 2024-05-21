const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

// Registration route
router.post('/register', authController.registerUser);

// Login route
router.post('/login', authController.loginUser);

// Fetch all users (Admin only)
router.get('/users', [authMiddleware, adminMiddleware], authController.getUsers);

// Delete user by ID (Admin only)
router.delete('/users/:id', [authMiddleware, adminMiddleware], authController.deleteUserById);

// Delete own account
router.delete('/delete', authMiddleware, authController.deleteOwnAccount);

module.exports = router;
