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

  router
  .route("/:id")
  .get((req, res) => {
    console.log("get")
  })
  .delete((req, res, next) => {
    const recipe = recipes.find((r, i) => {
      if (r.id == req.body.id) {
        recipes.splice(i, 1);
        return true;
      }
    });

    if (recipe) res.json(post);
    else next();
  })
  .patch((req, res, next) => {
    const recipe = recipes.find((r, i) => {
      if (r.id == req.body.id) {
        for (const key in req.body) {
          recipes[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (recipe) res.json(post);
    else next();
  })
  

  module.exports = router;
