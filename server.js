const express = require('express');

const server = express();

server.use(express.json());

let db = [
  
  {
    id: 1,
    name: 'Game 1',
    breed: 'Action',
    releaseYear: '1991'
  },

];

let emptyArray = [];


server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});


server.get('/games', async (req, res) => {
  const rows = await games.getAll();

  res.status(200).json(rows);
});


module.exports = server;
