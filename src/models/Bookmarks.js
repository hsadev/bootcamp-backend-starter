const { BelongsToOneRelation, BaseModel } = require('./BaseModel')
const User = require('./User')

class Bookmarks extends BaseModel {
  static get tableName() {
    return 'bookmarks'
  }

  static get relationMappings() {
    return {
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'bookmarks.userID',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Bookmarks
