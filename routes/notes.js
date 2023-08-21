const express = require('express');
const router = express.Router();

const notesData = require('../db/db.json');

//Endpoint to get all notes
router.get('/notes', (req, res) => {
  res.json(notesData);
});

// Endpoint to add a note
router.post('/notes', (req, res) => {
  const newNote = req.body;
  notesData.push(newNote);
  // Ideally, save the new note to some database or file
  res.json(newNote);
});




module.exports = router;
