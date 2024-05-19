const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/AuthRoutes');
const authMiddleware = require('./middleware/authMiddleware');

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/protected', authMiddleware, (req, res) => {
    res.send('This is a protected route');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
