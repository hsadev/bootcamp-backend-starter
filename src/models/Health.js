const { BelongsToOneRelation, BaseModel } = require('./BaseModel')
const User = require('./User')

class Health extends BaseModel {
  static get tableName() {
    return 'health'
  }

  static get relationMappings() {
    return {
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'health.userID',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Health
