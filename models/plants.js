/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

    let waterPlantsToday = (data, callback) => {

        let date = new Date().toISOString().split('T')[0];

        let query = `SELECT * FROM plants WHERE (watered=false AND next_water_date>='${date}')`;

        dbPoolInstance.query(query, (error, queryResult) => {

            if (error) {

                callback(error, null);

            } else {

                callback(queryResult.rows);
                // console.log(queryResult.rows)

            }
        });
    }



  return {

    waterPlantsToday

  };
};