
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
       
        {id: 1, title: 'Pacman'},
        {id: 2, genre: 'Arcade'},
      ]);
    });
};
