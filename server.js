const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const PORT = 3000

const path = require('path');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.get('/', (req, res) => {
    const todos = ['Task 1', 'Task 2', 'Task 3']; // Example data
    res.render('index', { todos });
  });



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
