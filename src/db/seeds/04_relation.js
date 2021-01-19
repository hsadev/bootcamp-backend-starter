const data = require('../../../data/relation')

exports.seed = knex => knex('relations').del()
  .then(() => knex('relations').insert(data))