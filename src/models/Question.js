const BaseModel = require('./BaseModel')
const Category = require('./Category')
const { BelongsToOneRelation } = require('./BaseModel')


class Question extends BaseModel {
  static get tableName() {
    return 'questions'
  }

  static get relationMappings() {
    return {
        categories : {
            relation: BelongsToOneRelation, 
            modelClass: Category, 
            join: {
                from: 'questions.categoryID',
                to: 'categories.id',
            },
        },
    }
  }
}

module.exports = Question
