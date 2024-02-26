const express = require("express")
const router = express.Router()

const users = require("../data/users");
const recipes = require("../data/recipes");
console.log(users)


router
.route("/")
.get((req, res) => {
    // res.render("index", { recipes: recipes });
    //const name = req.body.username
    //console.log(name)
    //res.json(users);
  })

router
.route("/username/")
.get((req, res) => {
  //const username = req.body.name
  //console.log(username)
})
.post((req, res) => {
  //console.log(req.body.name)
  const user = users.find((u) => u.username == req.body.name)
  //console.log(user)
  const recipe = recipes.filter((r) => r.user_id == user.user_id)
  //console.log(recipe)
  res.render("users", { cards: recipe, user: user });
  
})

module.exports = router;