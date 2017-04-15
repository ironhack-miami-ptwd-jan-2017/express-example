const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res, next) => {

  console.log('User is at the root of domain(homepage)');
  res.render('home.ejs');

});

app.get('/about', (req, res, next) => {
  res.render('about.ejs');

});

app.get('/gallery', (req, res, next) => {
  res.render('gallery.ejs');

});

app.listen(3000);
