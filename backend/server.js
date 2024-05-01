// app.js

const express = require('express');
const connectDB = require('./config/database'); // Adjust the path based on the location inside config folder

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
