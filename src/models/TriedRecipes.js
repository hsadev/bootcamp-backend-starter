const { BelongsToOneRelation, HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

const User = require('./User')

class TriedRecipes extends BaseModel {
  static get tableName() {
    return 'tried_recipes'
  }

  static get relationMappings() {
    return {
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'tried_recipes.userID',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = TriedRecipes
