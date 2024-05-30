// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle form submission
app.post('/api/contact', (req, res) => {
  const formData = req.body;
  // Here you can handle the form data, for example, send an email, save to a database, etc.
  console.log('Received form data:', formData);
  // Send a response indicating success
  res.status(200).json({ message: 'Form submitted successfully' });
});

// Route to handle form submission
app.post('/api/contact', (req, res) => {
  const formData = req.body;
  // Here you can handle the form data, for example, send an email, save to a database, etc.
  console.log('Received form data:', formData);
  // Send a response indicating success
  res.status(200).json({ message: 'Form submitted successfully' });
});

// Start Express on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
