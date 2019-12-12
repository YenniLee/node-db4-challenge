
exports.up = function(knex) {
    return knex.schema 
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 256).notNullable();
            tbl.string('recipe_description', 512)
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name, 256').notNullable();
        })
        .createTable('steps', tbl => {
            tbl.increments();
            tbl.integer('recipe_id').unsigned().notNullable().references('recipes.id').onDelete('CASCADE').onUpdate('CASCADE');
            tbl.integer('step_number').unsigned().notNullable();
            tbl.string('instructions', 512).notNullable();
        })
        .createTable('recipe_ingredients', tbl => {
            tbl.increments();
            tbl.integer('recipe_id').unsigned().notNullable().references('recipes.id').onDelete('CASCADE').onUpdate('CASCADE');
            tbl.integer('ingredient_id').unsigned().notNullable().references('ingredients.id').onDelete('CASCADE').onUpdate('CASCADE');
            tbl.string('ingredient_quantity', 256).notNullable();
        })
  
};

exports.down = function(knex) {
    return knex.schema
            .dropTableIfExists('recipes')
            .dropTableIfExists('ingredients')
            .dropTableIfExists('steps')
            .dropTableIfExists('recipe_ingredients');  
};
