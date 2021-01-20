const { BelongsToOneRelation, HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

const User = require('./User')

class Health extends BaseModel {
  static get tableName() {
    return 'healths'
  }

  static get relationMappings() {
    return {
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'healths.userID',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Health
