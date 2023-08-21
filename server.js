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

//static middleware pointing to the public folder
app.use(express.static('public'));

// Send all the requests that begin with /api to the index.js in the routes folder
app.use('/api', apiRoutes);

// it sends the 'index.html' file as a response.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});









// Fallback route for when a user attempts to visit routes that don't exist
// app.get('*', (req, res) =>
//   res.send(
//     `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
//   )
// );


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);