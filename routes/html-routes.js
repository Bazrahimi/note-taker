//require modules
const router = require('express').Router();
const path = require('path');

//define the route for inxex.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//define the route for "note.html"

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));

});

module.exports = router;