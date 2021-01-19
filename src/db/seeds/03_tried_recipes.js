const triedRecipeData = require('../../../data/tried_recipe.js')

exports.seed = knex => knex('tried_recipes').del()
  .then(() => knex('tried_recipes').insert(triedRecipeData))
