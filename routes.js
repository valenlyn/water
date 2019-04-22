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
    const plants = require('./controllers/plants')(allModels);
    const multer = require('multer')
    var upload = multer({ dest: 'uploads/' })
    const storage = multer.diskStorage({
      destination: function(req, file, cb) {
        cb(null, 'uploads/')
      },
      filename: function(req, file, cb) {
        console.log(file)
        cb(null, file.originalname)
      }
    })


    app.get('/', main.index);
    // if logged in, show watering page
    // if not logged in, show sign up + login page

    app.post('/signup', main.signUpRequest);

    app.get('/login', main.logIn);
    app.post('/', main.authenticate);

    app.get('/new', plants.addPlant);
    app.post('/new', upload.single('img'), plants.receiveAddPlantRequest);
    app.post('/newAndAnother', plants.receiveAddPlantRequestAndAdd);

    app.post('/watered/:id', plants.water);

    app.get('/plants', plants.all);

    app.get('/plants/:id', plants.view);

    app.post('/logout', main.logOut);



};