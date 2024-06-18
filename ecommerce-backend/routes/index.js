const express = require('express');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');

const router = express.Router();

// User routes
router.use('/api/users', userRoutes);

router.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Product routes
router.use('/api/products', productRoutes);

module.exports = router;
