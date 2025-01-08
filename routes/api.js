const express = require('express');
const router = express.Router();

// Sample data
const data = {
  message: 'Hello from the backend!'
};

// Handle GET request to /api/data
router.get('/data', (req, res) => {
  res.json(data);
});

module.exports = router;