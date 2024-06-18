// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const Product = require('./Product.js')(sequelize, DataTypes);
const User = require('./User.js')(sequelize, DataTypes);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Product = Product;
db.User = User;

module.exports = db;
