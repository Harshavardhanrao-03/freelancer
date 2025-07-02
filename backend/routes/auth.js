const express = require('express');
const router = express.Router();
const User = require('../models/user');

// REGISTER
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ error: 'User already exists' });

    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  res.json({ message: 'Login successful', user });
});

// PROFILE UPDATE
router.post('/profile', async (req, res) => {
  const { email, name, age, location, profilePicUrl } = req.body;
  const updated = await User.findOneAndUpdate(
    { email },
    { name, age, location, profilePicUrl },
    { new: true, upsert: false }
  );
  res.json(updated);
});

module.exports = router;
