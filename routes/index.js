//routes/index.js
const express = require('express');
const router = express.Router();

const noteRoutes = require('./notes.js');

// For routes that start with /api/notes
router.use('/notes', noteRoutes);

// Add other routers as needed...

module.exports = router;
