const express = require('express');
const helmet = require('helmet');

const carsRouter = require('./cars/car-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter)
server.use('/', (req, res) => {
  res.json({ api: 'UP!'});
});

module.exports = server;