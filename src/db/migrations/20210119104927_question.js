const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'questions', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('categoryId')
    .references('categories.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
    .notNullable()

  table.string('question').notNullable()

  table.integer('answerMinimum').notNullable()
  table.integer('answerMaximum').notNullable()

  table.float('popularity')
  table.float('difficulty')
})

exports.down = async knex => knex.schema.dropTableIfExists('questions')
