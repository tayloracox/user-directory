const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require('data.js');

const app = express();

app.use(express.static('public'))
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/', function (req, res) {
  res.render('directory-list')
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})