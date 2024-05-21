const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/AuthRoutes');
const { authMiddleware } = require('./middleware/authMiddleware');
const path = require('path');



connectDB();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../build')));

app.use('/api/auth', authRoutes);
app.use('/api/protected', authMiddleware, (req, res) => {
    res.send('This is a protected route');
});

app.get('/', (req, res) => {
    res.send('Database Connected!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
