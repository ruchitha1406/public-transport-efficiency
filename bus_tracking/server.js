const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Store latest GPS coordinates
let latestLocation = { lat: 0, lon: 0 };

// Endpoint for mobile to send GPS
app.post('/update-location', (req, res) => {
  const { lat, lon } = req.body;
  if (lat && lon) {
    latestLocation = { lat, lon };
    console.log('Location updated:', latestLocation);
    res.json({ status: 'ok' });
  } else {
    res.status(400).json({ status: 'error', message: 'Invalid coordinates' });
  }
});

// Endpoint for map to fetch latest GPS
app.get('/location', (req, res) => {
  res.json(latestLocation);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});