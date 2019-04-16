module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller

    const main = require('./controllers/main')(allModels);


    app.get('/', main.index);
    // if logged in, show watering page
    // if not logged in, show sign up + login page

    app.post('/signup', main.signUpRequest);

    app.get('/login', main.logIn);
    app.post('/', main.authenticate);


};