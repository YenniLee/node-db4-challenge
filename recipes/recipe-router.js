const express = require('express');

const Recipe = require('../data/helpers/recipe-model.js');

const router = express.Router();

// make routes below
router.get('/', (req, res) => {
    Recipe.getRecipes()
          .then(recipes => {
              res.status(200).json(recipes);
          })
          .catch(err => {
              res.status(500).json({
                message: 'Unable to retrieve recipes.',
                error: err
              });
          });
});

router.get('/:id/shoppingList', (req, res) => {
    const recipeId = req.params.id;

    Recipe.getShoppingList(recipeId)
          .then(shoppingList => {
              res.status(200).json(shoppingList);
          })
          .catch(err => {
              res.status(500).json({
                  message: 'Unable to get shopping list for this recipe.',
                  error: err
              });
          });
});

router.get('/:id/instructions', (req, res) => {
    const recipeId = req.params.id;

    Recipe.getInstructions(recipeId)
          .then(instructions => {
              res.status(200).json(instructions);
          })
          .catch(err => {
              res.status(500).json({
                  message: 'Unable to get instructions for this recipe.',
                  error: err
              });
          });
});

module.exports = router;