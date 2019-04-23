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
            var img;

            // If user doesn't upload an image, use this default image

            if (!request.file) {

                img = "https://res.cloudinary.com/water123/image/upload/v1555950989/awwner6igxp6irvwekto.png";

            } else {

                img = request.file.path;
            }

            cloudinary.uploader.upload(img, function(error, result) {
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

                    response.redirect('/new');

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
                let daysLeft = Math.round((date - today)/(1000*60*60*24)) -1;
                // let daysLeft = Math.round((date - today)/(1000*60*60*24));

                response.cookie('nickname', result[0].nickname);
                response.cookie('daysLeft', daysLeft);
                response.cookie('id', result[0].id);

                if (!request.cookies.all) {
                    response.redirect('/');
                } else {
                    response.redirect('/plants');
                }
            }

            db.plants.wateredPlant(data, doneWithQuery);

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

                response.cookie('all', sha256("hi"));
                response.render('main/all', {plants: result});

            }

            db.plants.showAll(data, doneWithQuery);

        }
    }

    let view = (request, response) => {

        if (!request.cookies.loggedin) {

            response.render('main/main');

        } else {

            let plant_id = request.params.id;
            let data = {id: plant_id};

            const doneWithQuery = (result) => {

                response.render('main/single', {plant: result});

            }

                db.plants.findSingle(data, doneWithQuery);

            }
    }

    let edit = (request, response) => {

        if (!request.cookies.loggedin) {

            response.render('main/main');

        } else {

            let plant_id = request.params.id;

            console.log(request.body);
            console.log(request.body);
            console.log(request.body);
            console.log(request.body);
            console.log(request.body);

            let id = request.cookies.loggedin.split('V')[0];

                let data = {
                    id: plant_id,
                    name: request.body.name,
                    nickname: request.body.nickname,
                    next_water_date: request.body.next_water_date,
                    frequency: request.body.frequency,
                    owner_id: id,
                    reminder_type: request.body.reminder_type,
                    // img: url,
                    instructions: request.body.instructions
                };

                // console.log(data);

                // console.log(data);
                // console.log(data);
                // console.log(data);
                // console.log(data);

            const doneWithQuery = (result) => {

                response.render('main/single', {plant: result});

            }

            db.plants.editPlant(data, doneWithQuery);

        }
    }

    let editForm = (request, response) => {

        if (!request.cookies.loggedin) {

            response.render('main/main');

        } else {

            let plant_id = request.params.id;
            let data = {id: plant_id};

            const doneWithQuery = (result) => {

                response.render('main/edit', {plant: result});

            }

            db.plants.findSingle(data, doneWithQuery);

        }
    }

    let deleteConfirmation = (request, response) => {

        if (!request.cookies.loggedin) {

            response.render('main/main');

        } else {

            let plant_id = request.params.id;
            let data = {id: plant_id};

            const doneWithQuery = (result) => {

                response.render('main/delete', {plant: result});

            }

                db.plants.findSingle(data, doneWithQuery);

            }

    }

    let deletePlant = (request, response) => {

        if (!request.cookies.loggedin) {

            response.render('main/main');

        } else {

            let plant_id = request.params.id;
            let data = {id: plant_id};

            const doneWithQuery = (result) => {

                response.redirect('/');

            }

                db.plants.deletePlant(data, doneWithQuery);

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
    all,
    view,
    edit,
    editForm,
    deleteConfirmation,
    deletePlant
  };

}