const sha256 = require('js-sha256');
const SALT = 'shrek';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let index = (request, response) => {
        response.render('main/main');
    };

    let signUpRequest = (request, response) => {

        const data = {
            name: request.body.name,
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

    let loginRequest = (request, response) => {

            response.render('main/login');

    };


    // let loggedIn = (request, response) => {

    //     const data = {
    //         name: request.body.name,
    //         password: sha256(request.body.password + SALT)
    //     }

    //     console.log(data);

    //     const doneWithQuery = (result) => {
    //         console.log(result);

    //         if (result === "Password is wrong") {
    //             response.send("Password is wrong");
    //         } else if (result === "Username not found") {
    //             response.send("Username not found");
    //         } else {

    //             let secretCookie = sha256(SALT + data.name);
    //             response.cookie('loggedin', secretCookie);
    //             console.log(result);
    //             response.render('main/user', {user: result.user, tweeds: result.tweeds});
    //             // response.send("worrrksss");
    //         }
    //     }

    //     db.login.login(data, doneWithQuery);

    // };




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index,
    signUpRequest,
    loginRequest

  };

}