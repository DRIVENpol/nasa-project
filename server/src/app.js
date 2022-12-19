const express = require('express');
const cors = require('cors');

const planetRouter = require('./routes/planets/planets.router');

const app = express();

// Allow only localhost:3000 to use the API
app.use(cors({
    origin: 'http://localhost:3000',
  }));
app.use(express.json());
app.use(planetRouter);

module.exports = app;