const { BelongsToOneRelation, BaseModel } = require('./BaseModel')
const User = require('./User')

class Diet extends BaseModel {
  static get tableName() {
    return 'diet'
  }

  static get relationMappings() {
    return {
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'diet.userID',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Diet
