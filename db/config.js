// db/config.js

const options = {
  query: (e) => {
    console.log(e.query)
  }
}

const pgp = require('pg-promise')(options);

const setDataBase =
    () => {
      return pgp({database: 'employee-app', port: 5432, host: 'localhost'})
    }

const db = setDataBase();
module.exports = db;