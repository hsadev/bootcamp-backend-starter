const { BelongsToOneRelation, HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')
const Diet = require('./Diet')
const Health = require('./Health')
const TriedRecipes = require('./TriedRecipes')
const Bookmarks = require('./Bookmarks')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      diet: {
        relation: HasManyRelation,
        modelClass: Diet,
        join: {
          from: 'users.id',
          to: 'diets.userID',
        },
      },

      health: {
        relation: HasManyRelation,
        modelClass: Health,
        join: {
          from: 'users.id',
          to: 'healths.userID',
        },
      },

      tried_recipes: {
        relation: HasManyRelation,
        modelClass: TriedRecipes,
        join: {
          from: 'users.id',
          to: 'tried_recipes.userID',
        },
      },

      bookmarks: {
        relation: HasManyRelation,
        modelClass: Bookmarks,
        join: {
          from: 'users.id',
          to: 'bookmarks.userID',
        },
      },
    }
  }
}

module.exports = User
