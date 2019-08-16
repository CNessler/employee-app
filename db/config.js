// db/config.js
require('dotenv').config()

// const options = {
//   query: (e) => {
//   }
// }
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

const db = client.connect();

// const pgp = require('pg-promise')(options);

// const setDataBase =
//     () => {
//       return pgp({database: 'employee-app', port: 5432, host: 'localhost'})
//     }

// const db = setDataBase();
module.exports = db;