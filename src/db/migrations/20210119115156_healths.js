const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'healths', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('userID')
    .references('users.id')
    .notNullable()

  table
    .enum('restriction', ['dairy-free', 'egg-free', 'gluten-free', 'kosher', 'peanut-free', 'pescatarian', 'shellfish-free', 'soy-free', 'tree-nut-free', 'vegan', 'vegetarian'])
    .notNullable()

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('healths')
