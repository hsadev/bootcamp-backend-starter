const { BelongsToOneRelation, HasManyRelation } = require('objection')

const BaseModel = require('./BaseModel')

class TriedRecipe extends BaseModel {
  static get tableName() {
    return 'tried_recipes'
  }

  static get relationMappings() {
      const User = require('./User')

      return {
          users: {
              relation: BelongsToOneRelation,
              modelClass: User,
              join: {
                  from: 'tried_recipes.userID',
                  to: 'users.id'
              },
          },
      }
  }
}

module.exports = TriedRecipe
