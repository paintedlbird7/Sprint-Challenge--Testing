const express = require('express');

const server = express();

server.use(express.json());

let db = [
  
  {
    title: 'Pacman',
    genre: 'Arcade',
  },

];

let emptyArray = [];


server.get('/', async (req, res) => {
  res.status(200).json({ api: 'games' });
});



server.get('/games', async (req, res) => {
  const rows = await games.getAll();

  res.status(200).json(rows);
});


module.exports = server;
