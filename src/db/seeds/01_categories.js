const categoryData = require('../../../data/category')


exports.seed = knex => knex('categories').del()
  .then(() => knex('categories').insert(categoryData))
