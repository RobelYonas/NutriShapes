const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes.js'); // Change the file name to 'authRoutes.js'

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/auth', authRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
