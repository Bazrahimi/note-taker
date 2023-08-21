//server.js
//import express library
const express = require('express');
//import path modules
const path = require('path');

const apiRoutes = require('./routes/index.js');

//initilize an instance of express.js
const app = express();

//specify PORT
const PORT = 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Send all the requests that begin with /api to the index.js in the routes folder
app.use('/api', apiRoutes);

// Route for the notes.html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// Serve the 'index.html' file for the base URL.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

//static middleware pointing to the public folder
// Put it before the fallback route to ensure it doesn't interfere with other routes.
app.use(express.static('public'));

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) => {
  res.send(`Sorry, this page doesn't exist!`);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});
