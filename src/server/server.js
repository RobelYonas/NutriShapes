const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/AuthRoutes');
const { authMiddleware } = require('./middleware/authMiddleware');

connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/protected', authMiddleware, (req, res) => {
    res.send('This is a protected route');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
