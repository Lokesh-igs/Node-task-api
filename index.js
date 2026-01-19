const express = require('express');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

// middleware to parse JSON
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send('Task API is runnings');
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
