const express = require("express");
const ingredients = require("./ingredientsHelper");
const router = express.Router();
router.get("/", (req, res) => {
 ingredients
   .find()
   .then(ingredients => {
     res.json(ingredients);
   })
   .catch(err => {
     res.status(500).json({ message: "Failed to get recipes" });
   });
});
router.get("/:id", (req, res) => {
 const { id } = req.params;
 ingredients
   .findById(id)
   .then(ingredient => {
     if (ingredient) {
       res.json(ingredient);
     } else {
       res
         .status(404)
         .json({ message: "Could not find ingredient with given id." });
     }
   })
   .catch(err => {
     res.status(500).json({ message: "Failed to get ingredient" });
   });
});
router.post("/", (req, res) => {
 ingredients
   .add(req.body)
   .then(ingredient => {
     res.status(201).json(ingredient);
   })
   .catch(err => {
     res.status(500).json({ message: "Failed to create ingredient" });
   });
});
router.delete("/:id", (req, res) => {
 const { id } = req.params;
 ingredients
   .remove(id)
   .then(deleted => {
     if (deleted) {
       res.json(id);
     } else {
       res
         .status(404)
         .json({ message: "Could not find ingredient with given id" });
     }
   })
   .catch(err => {
     res.status(500).json({ message: "Failed to delete ingredients" });
   });
});
module.exports = router;