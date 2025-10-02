const fs = require('fs');
const path = require('path');
require('dotenv').config();
const connectDB = require('../config/database');
const User = require('../models/User');

const seedDatabase = async () => {
  try {
    await connectDB();
    
    // Read user data from user.json
    const userDataPath = path.join(__dirname, '..', 'user.json');
    const userData = JSON.parse(fs.readFileSync(userDataPath, 'utf-8'));
    
    // Clear existing users
    await User.deleteMany({});
    
    // Insert user data
    const user = new User(userData);
    await user.save();
    
    console.log('Database seeded successfully with user data');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
