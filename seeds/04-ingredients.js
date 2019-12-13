
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: 'flour' },
    { ingredient_name: 'butter' },
    { ingredient_name: 'olive oil' },
    { ingredient_name: 'garlic' },
    { ingredient_name: 'yeast' },
    { ingredient_name: 'parsley' },
    { ingredient_name: 'steel-cut oats' },
    { ingredient_name: 'Greek yogurt' },
    { ingredient_name: 'mixed berries' },
    { ingredient_name: 'honey' },
    { ingredient_name: 'salt' }
  ]);
};
