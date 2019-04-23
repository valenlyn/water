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

            let owner_id = request.cookies.loggedin.split('V')[0];

            let data = {
                owner_id: owner_id,
            }

            let getWaterPlantsToday = (result) => {

                let nickname = request.cookies.nickname;
                let daysLeft = request.cookies.daysLeft;
                let id = request.cookies.id;
                response.clearCookie('daysLeft');
                response.clearCookie('nickname');
                response.clearCookie('id');
                response.clearCookie('all');

                response.render('main/water', {id: id, nickname: nickname, daysLeft: daysLeft, plants: result});

            }

            db.plants.waterPlantsToday(data, getWaterPlantsToday);

        }

    };

    let signUpRequest = (request, response) => {

        const data = {
            email: request.body.email,
            name: request.body.name,
            password: sha256(request.body.password + SALT),
        }

        console.log(data);

        const doneWithQuery = (data) => {
            console.log(data);
            response.redirect('/login');
        }

      db.owners.signUp(data, doneWithQuery);

    };

    let logIn = (request, response) => {

        response.render('main/login');

    };

    let authenticate = (request, response) => {

        const data = {
            email: request.body.email,
            password: sha256(request.body.password + SALT)
        }

        console.log(data);

        const doneWithQuery = (result) => {
            console.log(result);
            console.log(request.body);
            if (result === "Password is wrong") {

                response.render('main/login', {message: result, email: request.body.email});
                // response.send(result);

            } else if (result === "Email not found") {

                response.render('main/login', {message: result});
                // response.send(result);

            } else {

                // console.log("this is the user id "+ result.user.id);

                let secretCookie = result.user.id + "V" + sha256(SALT + data.username);
                response.cookie('loggedin', secretCookie);

                response.redirect('/');

            }
        }

        db.owners.authenticate(data, doneWithQuery);

    };

    // let logOut = (request, response) => {

    //     response.clearCookie('loggedin');
    //     response.render('main/main');

    // }

    let loggingOut = (request, response) => {

        response.clearCookie('loggedin');
        response.render('main/main');
    }


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
    loggingOut
  };

}