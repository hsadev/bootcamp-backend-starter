const questionData = require('../../../data/question')


exports.seed = knex => knex('questions').del()
  .then(() => knex('questions').insert(questionData))
