const mealTrackerData = require('../../../data/meal_tracker.js')

exports.seed = knex => knex('meal_tracker').del()
  .then(() => knex('meal_tracker').insert(mealTrackerData))
