const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser'); // Use body-parser for form data
const Connect_DB = require('./config/connection');

// Load environment variables from config.env
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Connect to the database
Connect_DB();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Import and use routes
const Create_user = require('./comp/Routes/User_Route');
app.use('/api/v1/', Create_user);
const Get_Users = require("./comp/Routes/User_Route")
app.use('api/v1/',Get_Users);



// Start the server
app.listen(process.env.PORT, () => {
    console.log("Server running on PORT: " + process.env.PORT);
});
