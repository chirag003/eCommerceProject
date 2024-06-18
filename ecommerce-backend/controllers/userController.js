// userController.js
const User = require('../models/User.js');

// productController.js

const UserController = {
  async registerUser(req, res) {
    try {
      const { name, email } = req.body;
      const newUser = await User.create({ name, email });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getUserById(req, res) {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Error getting user by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async updateUser(req, res) {
    try {
      const userId = req.params.id;
      const { name, email } = req.body;
      const updatedUser = await User.update({ name, email }, { where: { id: userId } });
      if (updatedUser[0] === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Add other user-related controller methods here
};

module.exports = UserController;
