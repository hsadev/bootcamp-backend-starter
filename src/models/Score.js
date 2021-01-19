const BaseModel = require('./BaseModel')
const { BelongsToOneRelation } = require('./BaseModel')
const Category = require('./Category')
const User = require('./User')


class Score extends BaseModel {
  static get tableName() {
    return 'scores'
  }

  static get relationMappings() {
    return {
      categories: {
        relation: BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'scores.categoryId',
          to: 'categories.id',
        },
      },
      users: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'scores.userId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Score
