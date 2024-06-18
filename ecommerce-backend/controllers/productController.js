const { Product } = require('../models/Product.js');

const ProductController = {
  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error('Error getting all products:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getProductById(req, res) {
    try {
      const productId = req.params.id;
      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      console.error('Error getting product by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Add other product-related controller methods here
};

module.exports = ProductController;
