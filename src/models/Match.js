// Write your Relation model here!
const BaseModel = require('./BaseModel')

class Relation extends BaseModel {
    static get tableName() {
        return 'matches'
    }

    static get relationMappings() {

        return {

        }
    }
}

module.exports = Match