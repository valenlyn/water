const sha256 = require('js-sha256');
const SALT = 'shrek';

var cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'water123',
  api_key: '585826636463395',
  api_secret: 'REbcCbBSBYXWToZh0fIGCYt2Zxs'
});

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

            console.log(request.file);

            let url = "";

            cloudinary.uploader.upload(request.file.path, function(error, result) {
                console.log(result, error)

                url = result.url;

                let id = request.cookies.loggedin.split('V')[0];

                    let data = {
                        name: request.body.name,
                        nickname: request.body.nickname,
                        next_water_date: request.body.next_water_date,
                        frequency: request.body.frequency,
                        owner_id: id,
                        reminder_type: request.body.reminder_type,
                        img: url,
                        instructions: request.body.instructions
                    };

                    const doneWithQuery = (result) => {

                        response.redirect('/');

                    }

                    db.plants.addPlant(data, doneWithQuery);

            });

        }
    }

    let receiveAddPlantRequestAndAdd = (request, response) => {

        if (!request.cookies.loggedin) {

            response.render('main/main');

        } else {

            let url = "";

            cloudinary.uploader.upload(request.file.path, function(error, result) {
                console.log(result, error)

                url = result.url;

                let id = request.cookies.loggedin.split('V')[0];

                    let data = {
                        name: request.body.name,
                        nickname: request.body.nickname,
                        next_water_date: request.body.next_water_date,
                        frequency: request.body.frequency,
                        owner_id: id,
                        reminder_type: request.body.reminder_type,
                        img: url,
                        instructions: request.body.instructions
                    };

                const doneWithQuery = (result) => {
                    console.log(result);
                    response.render('main/newplant');
                }

                db.plants.addPlant(data, doneWithQuery);
            });
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

                let date = result[0].next_water_date;
                let today = new Date();
                let daysLeft = Math.round((date - today)/(1000*60*60*24)) +1;

                response.cookie('nickname', result[0].nickname);
                response.cookie('daysLeft', daysLeft);

                if (!request.cookies.all) {
                    response.redirect('/');
                } else {
                    response.redirect('/all');
                }


            }

            db.plants.wateredPlant(data, doneWithQuery);

        }
    }

    let view = (request, response) => {

        if (!request.cookies.loggedin) {

            response.render('main/main');

        } else {

            let id = request.params.id;

            const data = {
                        id: id
                        };

            const doneWithQuery = (result) => {

                response.render('main/individual', {plant: result});

            }

            db.plants.view(data, doneWithQuery);

        }

    }

    let all = (request, response) => {

        if (!request.cookies.loggedin) {

            response.render('main/main');

        } else {

            let owner_id = request.cookies.loggedin.split('V')[0];


            let data = {
                owner_id: owner_id
            }

            const doneWithQuery = (result) => {

                let nickname = request.cookies.nickname;
                let nextWaterDate = request.cookies.nextWaterDate;
                response.clearCookie('nextWaterDate');
                response.clearCookie('nickname');

                response.cookie('all', '238409389dxc27938728dskc928');
                response.render('main/all', {nickname: nickname, nextWaterDate: nextWaterDate, plants: result});

            }

            db.plants.showAll(data, doneWithQuery);

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
    receiveAddPlantRequestAndAdd,
    water,
    view,
    all
  };

}