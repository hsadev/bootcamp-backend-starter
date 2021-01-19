const scoreData = require('../../../data/score')


exports.seed = knex => knex('scores').del()
  .then(() => knex('scores').insert(scoreData))
