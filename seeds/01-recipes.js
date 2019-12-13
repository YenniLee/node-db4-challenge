
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { recipe_name: 'Garlic Naan', recipe_description: 'A buttery flatbread best served warm with curry.' },
    { recipe_name: 'Overnight Oats', recipe_description: 'Made with Greek yogurt, this is a high-protein and low-calorie breakfast.' }
  ]);
};
