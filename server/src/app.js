const express = require('express');
const cors = require('cors');
const morgan = require('morgan')

const planetRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();

// Allow only localhost:3000 to use the API
app.use(cors({
    origin: 'http://localhost:3000',
  }));

app.use(morgan('combined'));

app.use(express.json());
app.use(planetRouter);
app.use(launchesRouter);

module.exports = app;