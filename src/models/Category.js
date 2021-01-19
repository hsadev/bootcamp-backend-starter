const BaseModel = require('./BaseModel')
const { HasManyRelation } = require('./BaseModel')
const Question = require('./Question')
const Score = require('./Score')


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
          to: 'questions.categoryId',
        },
        scores: {
          relation: HasManyRelation,
          modelClass: Score,
          join: {
            from: 'categories.id',
            to: 'scores.categoryId',
          },
        },
      },
    }
  }
}

module.exports = Category
