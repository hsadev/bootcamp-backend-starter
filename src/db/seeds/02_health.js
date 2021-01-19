const healthData = require('../../../data/health')

exports.seed = knex => knex('health').del()
  .then(() => knex('health').insert(healthData))
