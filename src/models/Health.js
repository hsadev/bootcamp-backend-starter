const { BelongsToOneRelation, HasManyRelation } = require('objection')

const BaseModel = require('./BaseModel')

class Health extends BaseModel {
  static get tableName() {
    return 'health'
  }

  static get relationMappings() {
      const User = require('./User')

      return {
          users: {
              relation: BelongsToOneRelation,
              modelClass: User,
              join: {
                  from: 'health.userID',
                  to: 'users.id'
              },
          },
      }
  }
}

module.exports = Health
