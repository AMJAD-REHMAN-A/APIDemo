const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const { connectToDatabase } = require('./../config/database');

// Connect to MongoDB
connectToDatabase();

// Create Express app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

