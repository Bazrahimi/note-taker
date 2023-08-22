//routes/notes.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const notesData = require('../db/db.json');
const dbFilePath = path.join(__dirname, '../db/db.json');

const readNotesFromFile = () => {
  return JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
}

const writeNotesToFile = (notes) => {
  fs.writeFileSync(dbFilePath, JSON.stringify(notes, null, 2));
}

//Endpoint to get all notes
router.get('/notes', (req, res) => {
  res.json(notesData);
});


router.post('/notes', (req, res) => {
  const newNote = req.body;

  // Assigning a unique ID using the current length (not ideal for a large scale application)
  newNote.id = notesData.length + 1;

  const notes = readNotesFromFile();
  notes.push(newNote);

  writeNotesToFile(notes);

  res.json(newNote);
});


router.delete('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);

  const notes = readNotesFromFile();

  const updatedNotes = notes.filter(note => note.id !== noteId);

  if (notes.length === updatedNotes.length) {
      return res.status(404).json({ error: "Note not found" });
  }

  writeNotesToFile(updatedNotes);

  res.json({ message: 'Note deleted successfully' });
});





module.exports = router;
