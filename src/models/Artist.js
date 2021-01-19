const { BelongsToOneRelation, HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Artist extends BaseModel {
    static get tableName() {
      return 'artists'
    }
  
    static get relationMappings() {
      const Song = require('./Song')
  
      return {
        songs: {
          relation: HasManyRelation,
          modelClass: Song,
          join: {
            from: 'authors.id',
            to: 'songs.artistId',
          },
        },
      }
    }
  }
  
  module.exports = Artist
