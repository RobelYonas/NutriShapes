const mongoose = require('mongoose');
require('dotenv').config({ path: '../../../.env' });

const MONGO_URI = 'mongodb+srv://nestarobertnrn99se:Bobysawer23se!@cluster0.zt1epey.mongodb.net/Nutrishape'

const connectDB = async () => {
  try {
    console.log("Connecting to:", MONGO_URI);
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
