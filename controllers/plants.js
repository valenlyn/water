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

            let id = request.cookies.loggedin.split('V')[0];

            let data = {
                name: request.body.name,
                nickname: request.body.nickname,
                next_water_date: request.body.next_water_date,
                frequency: request.body.frequency,
                owner_id: id,
                reminder_type: request.body.reminder_type
            };

            const doneWithQuery = (result) => {
                console.log(result);
                response.redirect('/');
            }

            db.plants.addPlant(data, doneWithQuery);

        }
    }

    let water = (request, response) => {

        if (!request.cookies.loggedin) {

            response.render('main/main');

        } else {

            let owner_id = request.cookies.loggedin.split('V')[0];
            let plant_id = request.params.id;

            let data = {
                owner_id: owner_id,
                plant_id: plant_id
            }

            const doneWithQuery = (result) => {
                console.log(result);
                response.render('main/newplant');
            }

            db.plants.wateredPlant(data, doneWithQuery);

            response.redirect('/');

        }
    }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    addPlant,
    receiveAddPlantRequest,
    water
  };

}