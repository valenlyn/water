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

    var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
    app.post('/cool-profile', cpUpload, function (req, res, next) {
      // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
      //
      // e.g.
      //  req.files['avatar'][0] -> File
      //  req.files['gallery'] -> Array
      //
      // req.body will contain the text fields, if there were any
    })


};