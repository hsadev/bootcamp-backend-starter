const dietData = require('../../../data/diet')

exports.seed = knex => knex('diets').del()
  .then(() => knex('diets').insert(dietData))