const express = require('express');

const server = express();

server.use(express.json());



let db = [
  
  {
    title: 'Pacman',
    genre: 'Arcade',
  },
  {
    title: 'Pacman2',
    genre: 'Arcade',
  },

];

let emptyArray = [];

server.route('/games') 
.get((req, res) => {
    return res.status(200).json(db);
  });

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'games' });
});

server.route('/games', async (req, res) => {
  const rows = await games.getAll();
  res.status(200).json(rows);
});

// server.post('/games', (req, res) => {
//   const title = req.body.title
//   if(title === games.title) {
//     res.status(201).send(games); 
//   }
// })

server.route('/games')
.post((req, res)  => {
const { title, genre } = req.body
return res.status(201).json({ success: 'successfully created' });
// return res.status(201).json.games.getAll(); 
})

server.route('/games')
.get((req, res)  => {
const { title, genre } = req.body
return res.status(200).json({ message: 'successfully get game' }) 
})

module.exports = server;