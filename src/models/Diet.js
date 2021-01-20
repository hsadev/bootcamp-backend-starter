const { BelongsToOneRelation, HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

const User = require('./User')

class Diet extends BaseModel {
  static get tableName() {
    return 'diets'
  }

  static get relationMappings() {
    return {
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'diets.userID',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Diet
