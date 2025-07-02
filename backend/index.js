const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jobRoutes = require('./routes/Jobs'); // 👈 Make sure the name matches the actual file
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/freelancer', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

// ✅ Route mounting
app.use('/api', jobRoutes);  // /api/jobs is now available
app.use('/api/auth', authRoutes);

app.listen(3001, () => console.log('🚀 Server running on http://localhost:3001'));
