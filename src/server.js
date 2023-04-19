/*
  This file sets up the server and connects it to the database.
*/

// Import the environment variables from the .env file
require('dotenv').config();
// Import express
const express = require('express');
// Import the router file
const router = require('./router');

const app = express();
app.use(router);


app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));