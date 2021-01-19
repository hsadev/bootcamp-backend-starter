const { HasManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')
const Course = require('./Course')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      courses: {
        relation: HasManyRelation,
        modelClass: Course,
        join: {
          from: 'users.id',
          to: 'courses.userId'
        }
      }
    }
  }
}

module.exports = User
