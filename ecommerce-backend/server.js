const express = require('express');
const app = express();
const db = require('./models'); // Ensure this path is correct

// Middleware and routes
app.use(express.json());

// Define routes (example)
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Synchronize the database
db.sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
    const PORT = process.env.PORT || 9000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error synchronizing the database:', err);
  });
