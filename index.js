const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require('./data.js');


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


const bots = data.users;
app.get('/', function (req, res) {
   res.render('index', {bots});
});


app.listen(3000, function () {
  console.log('App Start Successful!')
});
