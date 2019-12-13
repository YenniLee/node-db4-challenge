const express = require('express');

const recipeRouter = require('./recipes/recipe-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Hello from the Recipes API</h2>`)
});

module.exports = server;

