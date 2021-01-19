const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'scores', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('userId')
    .references('users.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    .notNullable()

  table
    .uuid('categoryId')
    .references('category.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    .notNullable()

  table.float('score')
  table.datetime('timeScored')

  table.timestamps(true)
})

exports.down = knex => knex.schema.dropTableIfExists('scores')
