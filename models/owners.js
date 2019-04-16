/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

    let signUp = (data, callback) => {

        let query = `INSERT INTO owners (name, password) VALUES ('${data.name}', '${data.password}')`;

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






  return {
    signUp

  };
};