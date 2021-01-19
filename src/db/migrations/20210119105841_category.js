const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'categories', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('title').notNullable()
  table.text('description')

  table.enum('type', ['Geography', 'Miscellaneous', 'etc.....']).notNullable()

  table.float('popularity')
  table.float('difficulty')
})

exports.down = async knex => knex.schema.dropTableIfExists('categories')
