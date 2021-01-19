const dietData = require('../../../data/diet')

exports.seed = knex => knex('diet').del()
  .then(() => knex('diet').insert(dietData))
