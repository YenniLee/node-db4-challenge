
exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    {
      recipe_id: 1,
      ingredient_id: 1,
      ingredient_quantity: '1 3/4 cups'
    },
    {
      recipe_id: 1,
      ingredient_id: 2,
      ingredient_quantity: '1 Tablespoon'
    },{
      recipe_id: 1,
      ingredient_id: 3,
      ingredient_quantity: '1/4 cup'
    },
    {
      recipe_id: 1,
      ingredient_id: 4,
      ingredient_quantity: '3 cloves'
    },{
      recipe_id: 1,
      ingredient_id: 5,
      ingredient_quantity: '1 tablespoon'
    },
    {
      recipe_id: 1,
      ingredient_id: 6,
      ingredient_quantity: '1/4 cup'
    },
    {
      recipe_id: 2,
      ingredient_id: 7,
      ingredient_quantity: '1 cup'
    },
    {
      recipe_id: 2,
      ingredient_id: 8,
      ingredient_quantity: '1/2 cup'
    },
    {
      recipe_id: 2,
      ingredient_id: 9,
      ingredient_quantity: '1 1/2 Tablespoon'
    },
    {
      recipe_id: 1,
      ingredient_id: 10,
      ingredient_quantity: '1 Tablespoon'
    },

  ]);
};
