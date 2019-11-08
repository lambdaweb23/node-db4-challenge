const express = require("express");
const ingrediantsRouter = require("./routes/ingredients/ingredientsRouter");
const recipeRouter = require("./routes/recipe/recipeRouter");
const rIRouter = require("./routes/recipeIngredients/recIngRouter");
const stepsRouter = require("./routes/steps/stepsRouter");
const server = express();

server.use(express.json());
server.use(Logger);
server.use("/api/ingredients", ingrediantsRouter);
server.use("/api/recipes", recipeRouter);
server.use("/api/recing", recIngRouter);
server.use("/api/steps", stepsRouter);

function Logger(req, res, next) {
 console.log(
   `[${new Date().toISOString()}] ${req.method} to ${req.url}
     )}`
 );
 next();
}

module.exports = server;