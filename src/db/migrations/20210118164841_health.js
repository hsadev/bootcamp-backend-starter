exports.up = knex => knex.schema.createTable('health', table => {
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
        .enu('restriction', ['Gluten','Eggs','Wheat','Shellfish','Peanuts','Dairy','Soy','Fish','Tree Nuts'])
        .notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('health')