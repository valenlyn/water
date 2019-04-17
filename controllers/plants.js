const sha256 = require('js-sha256');
const SALT = 'shrek';

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let addPlant = (request, response) => {

        if (!request.cookies.loggedin) {
            response.render('main/main');
        } else {

            let id = request.cookies.loggedin.split('V')[0];

            response.render('main/newplant');

        }

    };

    let receiveAddPlantRequest = (request, response) => {

        if (!request.cookies.loggedin) {

            response.render('main/main');

        } else {

            console.log("nicknammemmemememe " +request.body.nickname);

            let id = request.cookies.loggedin.split('V')[0];

            let data = {
                name: request.body.name,
                nickname: request.body.nickname,
                next_water_date: request.body.next_water_date,
                frequency: request.body.frequency,
                owner_id: id
            };

            const doneWithQuery = (result) => {
                console.log(result);
                response.render('main/newplant');
            }

            db.plants.addPlant(data, doneWithQuery);

        }



    }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    addPlant,
    receiveAddPlantRequest
  };

}