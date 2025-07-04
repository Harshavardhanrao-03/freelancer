const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  location: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  profilePicUrl: String,
});

module.exports = mongoose.model('User', userSchema);
