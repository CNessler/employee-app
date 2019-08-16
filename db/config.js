// db/config.js

const options = {
  query: (e) => {
  }
}

const pgp = require('pg-promise')(options);

const setDataBase =
    () => {
      return pgp(process.env.DATABASE_URL || 'postgresql://heroku:password@localhost:5432/employee-app')
    }

const db = setDataBase();
module.exports = db;