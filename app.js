const express = require('express');


const app = express();


  // Tell Express that we want to use views
  // AND that the engine we are using is ejs
  //                                      |
  //                     ------------------
  //                     |
app.set('view engine', 'ejs');


  // Tell Express that we have static files
  // AND that they are located in the public/ folder
  //                                    |
  //                      ---------------
  //                      |
app.use(express.static('public'));


  // http://localhost:3000/
  //                      |
  //     ------------------
  //     |                  -----------------------
  //     |                  |                     |
app.get('/', (request, response, next) => {   //  |
    // This shows up in the TERMINAL          //  |
  console.log('HOME PAGE (root of domain)');  //  |
    //                                            |
    // --------------------------------------------
    // |
  response.render('home.ejs');
    //              |
    //        -------
    //        |
    // views/home.ejs
    // (magically knows to look inside views/)
});

  // http://localhost:3000/about
  //                         |
  //        ------------------
  //        |
app.get('/about', (req, res, next) => {
  res.render('about.ejs');
    //          |
    // views/about.ejs
    // (magically knows to look inside views/)
});


  // http://localhost:3000
  //                   |
  //        ------------
  //        |
app.listen(3000);
