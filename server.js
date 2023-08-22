
//import express library
const express = require('express');
//import path modules
const path = require('path');
const html_routes = require('./routes/html-routes');
const api_routes = require('./routes/api-routes');

//initilize an instance of express.js
const app = express();

//specify PORT
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//static middleware pointing to the public folder
app.use(express.static('public'));

app.use(html_routes);
app.use(api_routes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});
