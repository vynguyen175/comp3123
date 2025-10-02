const path = require('path');
const express = require('express');
require('dotenv').config();
const connectDB = require('./config/database');
const app = express();
const userRouter = require('./routes/users');

// Connect to MongoDB Atlas
connectDB();

// Body parser (need () )
app.use(express.json());

// Mount router (needs leading slash)
app.use('/api/v1/user', userRouter);

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Server Error');
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log('Web Server is listening at port ' + PORT);
});
