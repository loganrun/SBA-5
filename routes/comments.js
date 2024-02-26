const express = require("express")
const router = express.Router()

const comments = require("../data/comments");
//console.log(comments)


router
.route("/")
.get((req, res) => {
    // res.render("index", { recipes: recipes });
    //console.log(comments)
    res.json(comments);
  })

module.exports = router;