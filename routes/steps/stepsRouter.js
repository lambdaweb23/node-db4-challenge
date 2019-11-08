const express = require("express");
const steps = require("./stepsHelper");
const router = express.Router();
router.post("/", (req, res) => {
 steps
   .add(req.body)
   .then(recipe => {
     res.status(201).json(recipe);
   })
   .catch(err => {
     res.status(500).json({ message: "Failed to create recipe" });
   });
});
router.get("/:id/steps", (req, res) => {
 steps
   .getSteps(req.params.id)
   .then(recipe => res.status(200).json(recipe))
   .catch(err =>
     res
       .status(500)
       .json({ message: "Oops, no recipe." })
   );
});
module.exports = router;