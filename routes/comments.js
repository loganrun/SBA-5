const express = require("express")
const router = express.Router()

const comments = require("../data/comments");
const recipes = require("../data/recipes");
//console.log(comments)


router
.route("/:id")
.get((req, res) => {
    const { id } = req.params;
    const recipe = recipes.find((r) => r.id == id)
    console.log(recipe)
    //res.render("comments", { cards: recipe, comments:comments });
    console.log(id)
    res.json(comments);
  })

module.exports = router;