const express = require('express');

// Loads Node ENV(environment) variables
require('dotenv').config();

// Barebones API framework, easy to use - https://expressjs.com/
const app = express();
const PORT = 3000;

// Stocks API
const stocks = require('./api/stocks.js');
app.get('/stocks', stocks.get);

// Create the server
app.listen(PORT, function(){
  console.log(`Express server listening on port ${PORT}`);
});