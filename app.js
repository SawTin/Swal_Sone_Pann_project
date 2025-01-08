const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the frontend directory
app.use(express.static('frontend'));

// API route
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});