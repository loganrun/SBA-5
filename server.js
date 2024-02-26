const express = require('express')
const bodyParser = require('body-parser')
const recipes = require("./routes/recipes")
const users = require("./routes/users")
const comments = require("./routes/comments")

const app = express()
const PORT = 3000

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/images', express.static(path.join(__dirname, 'images')));


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json({ extended: true }));
app.use((req, res, next) => {
  const time = new Date();
  console.log(
    `-----
${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
  );
  if (Object.keys(req.body).length > 0) {
    console.log("Containing the data:");
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});

//routes
app.use("/api/users", users);
app.use("/api/recipes", recipes);
app.use("/api/comments", comments);





app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
