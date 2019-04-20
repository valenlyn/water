/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let waterPlantsToday = (data, callback) => {

        let date = new Date().toISOString().split('T')[0];

        let query = `SELECT * FROM plants WHERE (alive=true AND watered=false AND next_water_date <='${date}' AND owner_id=${data.owner_id})`;


        dbPoolInstance.query(query, (error, queryResult) => {

            if (error) {

                callback(error, null);

            } else {

                callback(queryResult.rows);
                // console.log(queryResult.rows)

            }
        });
    }

    let addPlant = (data, callback) => {

        // Query to insert new plant into DB, returns newly added row
        let query = `INSERT INTO plants (name, nickname, next_water_date, frequency, owner_id, reminder_type) VALUES ('${data.name}', '${data.nickname}', '${data.next_water_date}', ${data.frequency}, ${data.owner_id}, '${data.reminder_type}') RETURNING *`;

        dbPoolInstance.query(query, (error, queryResult) => {

            if (error) {

                callback(error, null);

            } else { // Make another query to get the owner's details

                let queryOwner = `SELECT * FROM owners WHERE id=${data.owner_id}`;

                dbPoolInstance.query(queryOwner, (error, queryResultOwner) => {

                    if (error) {

                        callback(error);

                    } else { // Create new row on Airtable to add notifications

                        var Airtable = require('airtable');
                        var base = new Airtable({apiKey: 'keyS3h9yowOlUCiPJ'}).base('appWHPu9AQrISrHiq');

                        let date = queryResult.rows[0].next_water_date;

                        // Adding at extra day to this date because ISO string ignores time, and we need the date formatted into ISO String for Airtable to parse
                        date.setDate(date.getDate() + 1);

                        base('Table 1').create({
                          "plant_id": queryResult.rows[0].id,
                          "name": queryResult.rows[0].nickname,
                          "owner_name": queryResultOwner.rows[0].name,
                          "email": queryResultOwner.rows[0].email,
                          "date": date.toISOString().split('T')[0],
                          "reminder_type": queryResult.rows[0].reminder_type
                        }, function(err, record) {
                            if (err) { console.error(err); return; }
                            console.log(record.getId());
                        });
                    callback(queryResult.rows);

                    }
                })
            }
        });
    }

    let wateredPlant = (data, callback) => {

        let query = `UPDATE plants SET watered=true WHERE id=${data.plant_id} RETURNING frequency, nickname`;

        dbPoolInstance.query(query, (error, queryResult) => {

            if (error) {

                callback(error, null);

            } else {

                let frequency = queryResult.rows[0].frequency;

                let queryTwo = `UPDATE plants SET next_water_date=(current_date + ${frequency}), watered=false WHERE id=${data.plant_id} RETURNING next_water_date`;

                dbPoolInstance.query(queryTwo, (error, queryResultTwo) => {

                    if (error) {

                        callback(error, null);

                    } else {

                        console.log("Managed to update " +data.plant_id+ "!!!!!!!!!!!!!!!!!");

                        let queryAddWateredRow = `INSERT INTO watered (plant_id, watered_by) VALUES (${data.plant_id}, ${data.owner_id})`

                        dbPoolInstance.query(queryAddWateredRow, (error, queryResultThree) => {

                            if (error) {
                                callback(error, null);
                            } else {

                                callback(queryResult.rows);

                                // var Airtable = require('airtable');
                                // var base = new Airtable({apiKey: 'keyS3h9yowOlUCiPJ'}).base('appWHPu9AQrISrHiq');

                                // let newDate = queryResultTwo.rows[0].next_water_date.toISOString().split('T')[0];

                                // console.log("THIS IS NEW DATEE" + newDate);

                                // base('Table 1').create({
                                //   "plant_id": parseInt(data.plant_id),
                                //   "name": `${queryResult.rows[0].nickname}`,
                                //   "email": "valenlynchua@gmail.com",
                                //   "date": `${newDate}`
                                // }, function(err, record) {
                                //     if (err) { console.error(err); return; }
                                //     console.log(record.getId());
                                // });

                            }
                        })
                    }
                })

            }
        });

    }

  return {

    waterPlantsToday,
    addPlant,
    wateredPlant

  };
};