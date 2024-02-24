const express = require("express")
const router = express.Router()

const users = require("../data/users");
//console.log(users)


router
.route("/")
.get((req, res) => {
    // res.render("index", { recipes: recipes });
    //console.log(users)
    res.json(users);
  })

module.exports = router;