const { HasOneRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')
const User = require('./User')

class Course extends BaseModel {
    static get tableName() {
        return 'courses'
    }
    
    static get relationMappings() {
        return {
            users: {
                relation: HasOneRelation,
                modelClass: User,
                join: {
                    from: 'courses.userId',
                    to: 'users.id'
                }
            }
        }
    }
}

module.exports = Course