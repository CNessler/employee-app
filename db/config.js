// db/config.js

const options = {
  query: (e) => {
  }
}

const pgp = require('pg-promise')(options);

const setDataBase =
    () => {
      return pgp({database: 'dfbvp1p3lmbb58', port: 5432, host: 'ec2-54-83-36-37.compute-1.amazonaws.com'})
    }

const db = setDataBase();
module.exports = db;