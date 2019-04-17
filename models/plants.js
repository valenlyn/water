/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let waterPlantsToday = (data, callback) => {

        let date = new Date().toISOString().split('T')[0];

        let query = `SELECT * FROM plants WHERE (alive=true AND watered=false AND next_water_date <='${date}')`;

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




  return {

    waterPlantsToday,
    addPlant

  };
};