const db = require('../db-config.js');


function getRecipes() {
    return db('recipes');
};

function getShoppingList(id) {
    return db('recipe_ingredients as ri')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .select('i.ingredient_name as name', 'ri.ingredient_quantity as quantity')
    .where({ recipe_id: id });
};

function getInstructions(recipe_id) {
    return db('steps').where({ recipe_id }).orderBy('step_number');
};


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}