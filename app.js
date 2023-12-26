// Import the Express framework
const express = require('express');

// Create an Express application
const app = express();
const port = 3000; // You can change the port as needed

// Define a route for the root URL
app.get('/', (req, res) => {
  console.log('saaf krdia1');
  res.send('Hello, Express1234!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running osn port ${port}`);
});