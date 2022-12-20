// const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
// const path = require('path');

// const planetsRouter = require('./routes/planets/planets.router');
// const launchesRouter = require('./routes/launches/launches.router');

// const app = express();

// // Allow only localhost:3000 to use the API
// app.use(cors({
//     origin: 'http://localhost:3000',
//   }));

// app.use(morgan('combined'));

// app.use(express.json());
// app.use(express.static(path.join(__dirname, '..', 'public')));

// app.use(planetsRouter);
// app.use('/launches',launchesRouter);

// // When an unknow route is called, the server will
// // redirect the user to index.html
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });

// module.exports = app;

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
app.use('/planets', planetRouter);
app.use('/launches', launchesRouter);

module.exports = app;