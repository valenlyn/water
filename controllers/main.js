const sha256 = require('js-sha256');
const SALT = 'shrek';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let index = (request, response) => {

        if (!request.cookies.loggedin) {
            response.render('main/main');
        } else {

            const data = "hi";

            let getWaterPlantsToday = (result) => {
                console.log(result);
                // response.send(result);
                response.render('main/water', {plants: result});
            }

            db.plants.waterPlantsToday(data, getWaterPlantsToday);

        }

    };

    let signUpRequest = (request, response) => {

        const data = {
            username: request.body.username,
            password: sha256(request.body.password + SALT),
        }

        console.log(data);

        const doneWithQuery = (data) => {
            console.log(data);

            let respond = '<a href="/login">Log in</a>';
            response.send(respond);
        }

      db.owners.signUp(data, doneWithQuery);

    };

    let logIn = (request, response) => {

        response.render('main/login');

    };

    let authenticate = (request, response) => {

        const data = {
            username: request.body.username,
            password: sha256(request.body.password + SALT)
        }

        console.log(data);

        const doneWithQuery = (result) => {
            console.log(result);
            console.log(request.body);
            if (result === "Password is wrong") {

                response.render('main/login', {message: result, username: request.body.username});
                // response.send(result);

            } else if (result === "Username not found") {

                response.render('main/login', {message: result});
                // response.send(result);

            } else {

                console.log("this is the user id "+ result.user.id);

                let secretCookie = result.user.id + "V" + sha256(SALT + data.username);
                response.cookie('loggedin', secretCookie);


                response.render('main/water', {user: result.user, plants: result.plants});

            }
        }

        db.owners.authenticate(data, doneWithQuery);

    };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index,
    signUpRequest,
    logIn,
    authenticate,

  };

}