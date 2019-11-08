const express = require("express");
const knex = require("../../data/db-config");
const find = () => {
 return knex("ingredients");
};
const findById = id => {
 return knex("ingredients")
   .where({ id })
   .first();
};
const add = ingrediant => {
 return knex("ingredients").insert(ingrediant);
};
const remove = id => {
 return knex("ingredients")
   .where({ id })
   .delete();
};
module.exports = {
 add,
 remove,
 find,
 findById
 //   findSteps,
 //   update,
 //   remove
};