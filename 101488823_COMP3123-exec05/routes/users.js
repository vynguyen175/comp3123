const express = require('express');
const fs = require('fs');
const path = require('path');
const User = require('../models/User');

const routerUser = express.Router();
const userFile = path.join(__dirname, '..', 'user.json');

/*
- Return all details from user.json file to client as JSON format
- Also supports MongoDB Atlas if available
*/
routerUser.get('/profile', async (req, res, next) => {
  try {
    // Try to get from MongoDB first, fallback to JSON file
    try {
      const user = await User.findOne({});
      if (user) {
        return res.json(user);
      }
    } catch (mongoError) {
      // MongoDB not connected, will use JSON file
    }
    
    // Fallback to JSON file
    const data = JSON.parse(fs.readFileSync(userFile, 'utf-8'));
    res.json(data);
  } catch (err) {
    next(err);
  }
});

/*
- /login accepts JSON body { username, password } and validates against user.json
- Also supports MongoDB Atlas if available
*/
routerUser.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body || {};
    
    // Try to get from MongoDB first, fallback to JSON file
    let userData;
    try {
      const user = await User.findOne({ username: username });
      if (user) {
        userData = user;
      }
    } catch (mongoError) {
      // MongoDB not connected, will use JSON file
    }
    
    // Fallback to JSON file if MongoDB didn't work
    if (!userData) {
      const data = JSON.parse(fs.readFileSync(userFile, 'utf-8'));
      userData = data;
    }

    if (username !== userData.username) {
      return res.json({ status: false, message: 'User Name is invalid' });
    }
    if (password !== userData.password) {
      return res.json({ status: false, message: 'Password is invalid' });
    }
    return res.json({ status: true, message: 'User Is valid' });
  } catch (err) {
    next(err);
  }
});

/*
- /logout route accepts :username param and returns bold HTML
*/
routerUser.get('/logout/:username', (req, res) => {
  const { username } = req.params;
  res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = routerUser;
