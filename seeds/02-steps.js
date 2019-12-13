
exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    {
      recipe_id: 1,
      step_number: 1,
      instructions: 'Mix 3/4 tablespoon of yeast, 1/4 cup of warm water, and 1 tsp of sugar together and allow to sit for 20 min to activate yeast.'
    },
    {
      recipe_id: 1,
      step_number: 2,
      instructions: 'Mix 1 3/4 cup of flour and 2 cloves of garlic finely minced into mixture. Cover with a damp towel and allow to rise for 2 hours.'
    },
    {
      recipe_id: 1,
      step_number: 3,
      instructions: 'Divide dough mixture into 6 equal sized balls.'
    },
    {
      recipe_id: 1,
      step_number: 4,
      instructions: 'On a preheated cast iron skillet, add 1/2 tablespoon of olive oil. Stretch ball of dough into a 6 inch diameter round.'
    },
    {
      recipe_id: 1,
      step_number: 5,
      instructions: 'Cook on cast iron pan. About 3-4 minutes on each side. Finish with melted butter, salt to taste, and chopped parsley for garnish.'
    },
    {
      recipe_id: 2,
      step_number: 1,
      instructions: 'Add 1 1/2 cup of greek yogurt to bowl.'
    },
    {
      recipe_id: 2,
      step_number: 2,
      instructions: 'Mix 3/4 cup of steel cut oats to yogurt'
    },
    {
      recipe_id: 2,
      step_number: 3,
      instructions: 'Top with mixed berries and honey to taste.'
    }
  ]);
};
