const express = require("express");
const knex = require("../../data/db-config");
const add = rI => {
 return knex("recipe_ingredients").insert(rI);
};
const getShoppingList = id => {
 return knex("recipe_ingredients as r")
   .join("ingredients as i", "i.id", "=", "r.ingredient_id")
   .where("recipe_id", "=", id)
   .select("i.name", "r.quantity");
};
module.exports = {
 add,
 getShoppingList
};