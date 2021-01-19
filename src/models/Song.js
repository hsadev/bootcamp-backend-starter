const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Artist extends BaseModel {
    static get tableName() {
      return 'songs'
    }
  
    static get relationMappings() {
      const Artist = require('./Artist')
      return {
        artistOwner: {
          relation: BelongsToOneRelation,
          modelClass: Artist,
          join: {
            from: 'songs.artistId',
            to: 'artists.id',
          },
        },
      }
    }
  }
  
  module.exports = Artist
