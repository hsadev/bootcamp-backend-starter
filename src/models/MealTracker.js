const { BelongsToOneRelation, HasManyRelation } = require('objection')

const BaseModel = require('./BaseModel')

class MealTracker extends BaseModel {
  static get tableName() {
    return 'meal_tracker'
  }

  static get relationMappings() {
      const TriedRecipe = require('./TriedRecipe')

      return {
          tried_recipes: {
              relation: BelongsToOneRelation,
              modelClass: TriedRecipe,
              join: {
                  from: 'meal_tracker.triedID',
                  to: 'tried_recipes.id'
              },
          },
      }
  }
}

module.exports = MealTracker
