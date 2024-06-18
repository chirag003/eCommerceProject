const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Route: POST /api/users/register
router.post('/register', UserController.registerUser);

// Route: GET /api/users/:id
router.get('/:id', UserController.getUserById);

// Route: PUT /api/users/:id
router.put('/:id', UserController.updateUser);

module.exports = router;
