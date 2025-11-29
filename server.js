const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// POST route for the form
app.post('/subscribe', (req, res) => {
  const data = req.body;
  console.log('New subscription:', data);
  res.send('Subscription received!');
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});