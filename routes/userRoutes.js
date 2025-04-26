const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authMiddleware');
const { route } = require('./authRoutes');

router.get('/', userController.getAllUsers);





module.exports = router;