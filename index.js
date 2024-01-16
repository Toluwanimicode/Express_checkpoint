const express = require('express');
const { checkWorkingHours } = require('./middleware');

const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Use the custom middleware to check working hours for all routes
app.use(checkWorkingHours);

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/services', (req, res) => {
  res.sendFile(__dirname + '/views/services.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/contact.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});