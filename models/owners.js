/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

    let signUp = (data, callback) => {

        let query = `INSERT INTO owners (username, password) VALUES ('${data.username}', '${data.password}')`;

        dbPoolInstance.query(query, (error, queryResult) => {
          if( error ){

            // invoke callback function with results after query has executed
            callback(error, null);

          }else{

            // invoke callback function with results after query has executed

              callback(null, queryResult.rows);

          }
        });
    }

    let authenticate = (data, callback) => {

        let query = `SELECT * FROM owners WHERE username='${data.username}'`;

        dbPoolInstance.query(query, (error, queryResult) => {
          if( error ){

            // invoke callback function with results after query has executed
            callback(error, null);

          }else{

            // invoke callback function with results after query has executed

            if (queryResult.rows.length > 0) {

                if (queryResult.rows[0].password === data.password) {
                    console.log("Password is correct");

                    let id = parseInt(queryResult.rows[0].id);
                    let queryTwo = `SELECT * FROM plants WHERE owner_id=${id} ORDER BY next_water_date ASC`

                    dbPoolInstance.query(queryTwo, (error, queryResultTwo) => {

                        if (error) {
                            callback(error, null);
                        } else {
                            callback({user: queryResult.rows[0], plants: queryResultTwo.rows});
                            // console.log(queryResultTwo.rows);
                            // console.log("this is the user's iddddddd "+id);
                        }
                    })

                    // console.log(queryResult.rows)
                    // callback(queryResult.rows[0]);

                } else {

                    console.log("Password is wrong");
                    callback("Password is wrong");
                }


            } else {

                console.log("Username not found");
                callback("Username not found");

            }
          }
        });
    };

  return {
    signUp,
    authenticate

  };
};