// DEPENDENCIES
const mysql = require("mysql");
var connection;

// JAWSDB CONNECTION FOR HEROKU
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  // LOCAL CONNECTION
} else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
}

connection.connect();

module.exports = connection;
