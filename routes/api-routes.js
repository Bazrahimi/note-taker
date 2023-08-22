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






module.exports = router;