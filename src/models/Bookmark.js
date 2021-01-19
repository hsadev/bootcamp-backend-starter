const { BelongsToOneRelation, HasManyRelation } = require('objection')

const BaseModel = require('./BaseModel')

class Bookmark extends BaseModel {
  static get tableName() {
    return 'bookmarks'
  }

  static get relationMappings() {
      const User = require('./User')

      return {
          users: {
              relation: BelongsToOneRelation,
              modelClass: User,
              join: {
                  from: 'bookmarks.userID',
                  to: 'users.id'
              },
          },
      }
  }
}

module.exports = Bookmark
