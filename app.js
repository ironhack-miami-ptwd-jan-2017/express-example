const express = require('express');

const app = express ();

app.use(express.static('public'));

app.set('view engine', 'ejs');

//  https://localhost:3000/
app.get('/', (request, response, next) => {
  console.log('HOME PAGE (root of domain)');

  response.render('home.ejs');
});

app.get('/jedi', (request, response, next) => {
  console.log('JEDI PAGE (root of domain)');

  response.render('jedi.ejs');
});

app.get('/marvel', (request, response, next) => {
  console.log('MARVEL PAGE (root of domain)');

  response.render('marvel.ejs');
});
// http://localhost:3000
app.listen(3000);
