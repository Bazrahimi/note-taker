//api-routes

const router = require('express').Router();
const { v4: uuid4 } = require('uuid');
const fs = require('fs');

//define get request
router.get('/api/notes', async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync('db/db.json'));
  res.json(dbJson);
});

//define 
router.post('/api/notes', (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync('db/db.json'));
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuid4(),
  };
  dbJson.push(newNote);
  fs.writeFileSync('db/db.json', JSON.stringify(dbJson));
  res.json(dbJson);
});

router.delete('/api/notes/:id', (req, res) => {
  fs.readFile('db/db.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading the database file." });
    }
    const dataJSON = JSON.parse(data);
    const newNotes = dataJSON.filter(note => note.id !== req.params.id);

    fs.writeFile('db/db.json', JSON.stringify(newNotes), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing to the database file." });
      }
      res.json({ message: 'Note Deleted' });
    });
  });
});







module.exports = router;