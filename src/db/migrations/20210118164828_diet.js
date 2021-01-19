exports.up = knex => knex.schema.createTable('diet', table => {
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
        .enu('restriction', ['Vegetarian','Paleo','High-Protein','Low-Fat','Low-Sugar','Balanced','Vegan','High-Fiber','Low-Carb','Low-Sodium','Alcohol-Free','Immunity'])
        .notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('diet')