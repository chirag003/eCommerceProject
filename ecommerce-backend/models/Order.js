const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Order.associate = (models) => {
  Order.belongsTo(models.User, { foreignKey: 'user_id' });
  Order.hasMany(models.OrderChairs, { foreignKey: 'order_id' });
  Order.hasMany(models.OrderTables, { foreignKey: 'order_id' });
  Order.hasMany(models.OrderTops, { foreignKey: 'order_id' });
};

module.exports = Order;
