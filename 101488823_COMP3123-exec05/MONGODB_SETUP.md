# MongoDB Atlas Setup Guide

## Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Click "Try Free" to create an account
3. Fill in your details and create an account
4. Verify your email address

## Step 2: Create a Cluster

1. After login, click "Build a Database"
2. Choose "M0 Sandbox" (Free tier)
3. Select a cloud provider (AWS, Google Cloud, or Azure)
4. Choose a region closest to your location
5. Give your cluster a name (e.g., "comp3123-exec05")
6. Click "Create Cluster"

## Step 3: Create Database User

1. In the "Database Access" section, click "Add New Database User"
2. Choose "Password" authentication
3. Create a username and strong password
4. Set privileges to "Read and write to any database"
5. Click "Add User"

## Step 4: Whitelist IP Address

1. In the "Network Access" section, click "Add IP Address"
2. Click "Allow Access from Anywhere" (for development) or add your specific IP
3. Click "Confirm"

## Step 5: Get Connection String

1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Select "Node.js" as driver
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `<dbname>` with your database name (e.g., "comp3123_exec05")

## Step 6: Configure Environment Variables

1. Create a `.env` file in your project root
2. Add your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/comp3123_exec05?retryWrites=true&w=majority
PORT=8081
```

## Step 7: Seed the Database

Run the seed script to populate your MongoDB database with the user data:

```bash
npm run seed
```

## Step 8: Test Your Application

Start your server:

```bash
npm start
```

Your application will now work with both MongoDB Atlas and fallback to JSON file if MongoDB is not available.

## Available Endpoints

- `GET /home` - Returns home.html page
- `GET /api/v1/user/profile` - Returns user profile (from MongoDB or JSON)
- `POST /api/v1/user/login` - User login validation
- `GET /api/v1/user/logout/:username` - User logout

## Screenshots Required

Take screenshots of:
1. MongoDB Atlas dashboard after login
2. Your cluster overview
3. Database collections showing the seeded user data
4. Postman testing all endpoints
