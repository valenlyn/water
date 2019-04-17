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
                console.log(queryResult.rows)

            }
        });
    }

    let addPlant = (data, callback) => {

        // let date = new Date().toISOString().split('T')[0];
        // console.log(request.body);

        console.log(data);

        let query = `INSERT INTO plants (name, nickname, next_water_date, frequency, owner_id) VALUES ('${data.name}', '${data.nickname}', '${data.next_water_date}', ${data.frequency}, ${data.owner_id}) RETURNING *`;

        dbPoolInstance.query(query, (error, queryResult) => {

            if (error) {

                callback(error, null);

            } else {

                callback(queryResult.rows);
                console.log(queryResult.rows)

            }
        });
    }

    let wateredPlant = (data, callback) => {

        let query = `UPDATE plants SET watered=true WHERE id=${data.plant_id} RETURNING frequency`;

        // and update date

        dbPoolInstance.query(query, (error, queryResult) => {

            if (error) {

                callback(error, null);

            } else {

                let frequency = queryResult.rows[0].frequency;

                let queryTwo = `UPDATE plants SET next_water_date=(current_date + ${frequency}), watered=false WHERE id=${data.plant_id}`;

                dbPoolInstance.query(queryTwo, (error, queryResultTwo) => {

                    if (error) {

                        callback(error, null);

                    } else {

                        let queryAddWateredRow = `INSERT INTO watered (plant_id, watered_by) VALUES (${data.plant_id}, ${data.owner_id})`

                        dbPoolInstance.query(queryAddWateredRow, (error, queryResultThree) => {

                            if (error) {
                                callback(error, null);
                            } else {

                                callback(queryResult.rows)
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