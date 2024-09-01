const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/levon_techno', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;
