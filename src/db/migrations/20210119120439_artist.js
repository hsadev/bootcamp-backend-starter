const { createTableIfNotExists } = require('../helpers')

exports.up = function (knex) {

}

exports.down = async knex => knex.schema.dropTableIfExists('artists')
