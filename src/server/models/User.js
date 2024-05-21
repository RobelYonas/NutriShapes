const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  dietaryGoal: {
    type: String,
    enum: ['bulk', 'cut', 'maintain'],
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user' // Default role is 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
