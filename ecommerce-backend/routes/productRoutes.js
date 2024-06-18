const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController.js');

// Route: GET /api/products
router.get('/', ProductController.getAllProducts);

// Route: GET /api/products/:id
router.get('/:id', ProductController.getProductById);

// Route: POST /api/products
// router.post('/', ProductController.createProduct);

// Route: PUT /api/products/:id
// router.put('/:id', ProductController.updateProduct);

// Route: DELETE /api/products/:id
// router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
