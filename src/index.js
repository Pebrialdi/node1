const path = require('path');
require('dotenv').config({ path: path.join(__dirname, "../.env") });

const express = require('express');
const bodyParser = require('body-parser');


const authRoutes = require('./routes/auth.router');
const dataRoutes = require('./routes/data.router');
const { sequelize } = require('./models');

const app = express();

// Middleware
app.use(bodyParser.json());


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;

// Sync database and start server
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
