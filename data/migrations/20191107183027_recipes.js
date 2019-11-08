exports.up = function(knex) {
    return knex.schema
      .createTable("steps", tbl => {
        // the type of the Primary Key is: integer without negative values, also called unsigned
        tbl.increments();
        tbl.string("step", 255).notNullable();
        tbl
          .integer("recipe_id")
          .unsigned()
          .references("id")
          .inTable("recipes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl.integer("step_number").unsigned();
      })
      .createTable("recipes", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable();
      })
      .createTable("ingredients", tbl => {
          tbl.increments();
          tbl.string("name", 50).notNullable();
      })
      .createTable("recipe_ingredients", tbl => {
        tbl.increments();
        tbl
          .integer("recipe_id")
          .unsigned()
          .references("id")
          .inTable("recipes")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl
          .integer("ingredient_id")
          .unsigned()
          .references("id")
          .inTable("ingredients")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl.float("quantity");
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('steps')
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipe_ingredients');
  };
