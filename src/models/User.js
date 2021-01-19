const BaseModel = require('./BaseModel')
const { HasManyRelation } = require('./BaseModel')
const Score = require('./Score')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      scores: {
        relation: HasManyRelation,
        modelClass: Score,
        join: {
          from: 'users.id',
          to: 'scores.userId',
        },
      },
    }
  }
}

module.exports = User
