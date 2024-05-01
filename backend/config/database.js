// database.js

require('dotenv').config(); // This ensures that all entries in your .env file are properly loaded into process.env
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure if unable to connect to the database
  }
};

module.exports = connectDB;
