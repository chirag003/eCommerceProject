const sequelize = new Sequelize('ecommerce_db', 'chirag', 'dbPassword@123', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
      timestamps: false
    },
    logging: console.log, // Enable logging to see connection process
  });
  