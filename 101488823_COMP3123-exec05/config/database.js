const mongoose = require('mongoose');

const connectDB = async () => {
  // Only connect if MONGODB_URI is provided
  if (!process.env.MONGODB_URI) {
    console.log('MongoDB URI not provided, using JSON file fallback');
    return;
  }

  try {
    // MongoDB Atlas connection string - replace with your actual connection string
    const mongoURI = process.env.MONGODB_URI;
    
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    console.log('Falling back to JSON file mode');
  }
};

module.exports = connectDB;
