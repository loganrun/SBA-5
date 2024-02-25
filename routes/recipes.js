const express = require("express")
const router = express.Router()

const recipes = require("../data/recipes");
//console.log(recipes)


router
.route("/")
.get((req, res) => {
    res.render("index", { cards: recipes });
    //console.log(recipes)
    //res.json(recipes);
  })

  module.exports = router;