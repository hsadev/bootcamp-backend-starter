exports.up = knex => knex.schema.createTable('meal_tracker', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))
    
    table
        .uuid('triedID')
        .notNullable()
        .references('tried_recipes.id')
    
    table
        .date('date')
        .notNullable()
    
    table
        .enu('meal',['Breakfast','Lunch','Dinner','Snack'])
        .notNullable

})

exports.down = async knex => knex.schema.dropTableIfExists('meal_tracker')