exports.up = knex => knex.schema.createTable('bookmarks', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))
    
    table
        .uuid('userID')
        .notNullable()
        .references('users.id')
    
    table
        .string('link')
        .notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('bookmarks')