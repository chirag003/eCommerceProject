const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./Order');
const Product = require('./Product');

const OrderTops = sequelize.define('OrderTops', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: 'id',
    },
    allowNull: false,
  },
  top_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
    allowNull: false,
  },
});

module.exports = OrderTops;
