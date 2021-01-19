const BaseModel = require('./BaseModel')
const { HasManyRelation } = require('./BaseModel')
const Question = require('./Question')


class Category extends BaseModel {
  static get tableName() {
    return 'categories'
  }

  static get relationMappings() {
    return {
      questions: {
        relation: HasManyRelation,
        modelClass: Question,
        join: {
          from: 'categories.id',
          to: 'questions.categoryId'
        },
      },
    }
  }
}

module.exports = Category
