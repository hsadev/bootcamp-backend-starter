const { BelongsToOneRelation, HasManyRelation } = require('objection')

const BaseModel = require('./BaseModel')

class Diet extends BaseModel {
  static get tableName() {
    return 'diet'
  }

  static get relationMappings() {
      const User = require('./User')

      return {
          users: {
              relation: BelongsToOneRelation,
              modelClass: User,
              join: {
                  from: 'diet.userID',
                  to: 'users.id'
              },
          },
      }
  }
}

module.exports = Diet
