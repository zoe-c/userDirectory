const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require('./data.js');


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


app.get('/', function (req, res) {
  res.render('index',
  { img: data.users[0].avatar,
    name: data.users[0].name,
    job: data.users[0].job,
    company: data.users[0].company
  })
});


// //NOTE: This rendered everything as TAGS on the page (with the appropriate data pulled for each bot....)...
// // now how to figure out how to pass this to the index.mustache and then back to the app to render the index as done below?
// var bots = data.users;
// function renderBots() {
//    return `
//       ${bots.map(bot =>
//          `<ul class="botcontainer">
//           <li>
//             <img src="${bot.avatar}" alt="oops!-caught-in-the-cloud">
//           </li>
//           <li>${bot.name}</li>
//           <li>${bot.job}</li>
//           <li>${bot.company}</li>
//           </ul>
//           `).join('')}
//
//    `;
// }
//
//
// app.get('/', function (req, res) {
//   res.render('index', renderBots());
// });

app.listen(3000, function () {
  console.log('App Start Successful!')
});
