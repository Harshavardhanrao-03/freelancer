// dropPhoneIndex.js
const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/freelancer'; // your DB connection

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', async () => {
  console.log('✅ Connected to MongoDB');

  try {
    await db.collection('users').dropIndex('phone_1');
    console.log('✅ phone_1 index dropped successfully');
  } catch (err) {
    console.log('ℹ️  Index might not exist or another issue:', err.message);
  } finally {
    mongoose.disconnect();
  }
});
