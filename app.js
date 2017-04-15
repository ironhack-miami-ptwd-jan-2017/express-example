const express = require('express');


const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (request, response, next) => {
  console.log('HOME PAGE (root of domain)');

  response.render('home.ejs');
});

app.get('/about', (req, res, next) => {
  res.render('about.ejs');

});
app.get('/trailer', (req, res, next) => {
  res.render('trailer.ejs');
});

app.listen(3000);
