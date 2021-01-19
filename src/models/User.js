const { BelongsToOneRelation, HasManyRelation } = require('objection')

const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Diet = require('./Diet')
    const Health = require('./Health')
    const TriedRecipe = require('./TriedRecipe')

    return {
        diet: {
            relation: HasManyRelation,
            modelClass: Diet,
            join: {
                from: 'users.id',
                to: 'diet.userID'
            },
        },
        health: {
          relation: HasManyRelation,
          modelClass: Health,
          join: {
              from: 'users.id',
              to: 'health.userID'
          },
        },
        tried_recipes: {
          relation: HasManyRelation,
          modelClass: TriedRecipe,
          join: {
              from: 'users.id',
              to: 'tried_recipes.userID'
          },
        },
    }
}
}

module.exports = User
