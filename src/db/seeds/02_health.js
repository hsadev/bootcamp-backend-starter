const healthData = require('../../../data/health')

exports.seed = knex => knex('healths').del()
  .then(() => knex('healths').insert(healthData))