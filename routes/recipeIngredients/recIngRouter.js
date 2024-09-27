const express = require("express");
const recIng = require("./recIngHelper");
const router = express.Router();
router.post("/", (req, res) => {
 console.log(req.body);
 recIng.add(req.body)
   .then(grins => {
     res.status(201).json(grins);
   })
   .catch(err => {
     res.status(500).json({ message: "Failed to create recipe" });
   });
});
router.get("/:id/shoppingList", (req, res) => {
 recIng.getShoppingList(req.params.id)
   .then(shoppingList => {
     res.status(200).json(shoppingList);
   })
   .catch(err => {
     res.status(500).json({ message: "Failed get list" });
   });
});
module.exports = router;