const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require('./data.js');


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// function renderBots() {
//    return
//       data.users.map(user =>
//          { img: user.avatar,
//            name: user.name,
//            job: user.job
//         });
//
// }


app.get('/', function (req, res) {
  res.render('index',
  { img: data.users[0].avatar,
    name: data.users[0].name,
    job: data.users[0].job
  })
});

// app.get('/', function (req,res) {
//    res.send('Meet Bot Squad')
// });

app.listen(3000, function () {
  console.log('App Start Successful!')
});

// _____________CONNECT CHANNEL ^^





// Register '.mustache' extension with The Mustache Express

app.get('/', function (req, res) {
  res.render('index', { userName: 'Sam' })
})
