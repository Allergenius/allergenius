// Set up MySQL connection.
var mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config()

// const localConfig = {
//   host: process.env.JAWS_HOST,
//   user: process.env.JAW_USER,
//   password: process.env.JAWS_PW,
//   database: process.env.JAWS_DATABASE,
//   port: 3306
// }

// const connection = process.env.JAWSDB_URL ? mysql.createConnection(process.env.JAWSDB_URL) : mysql.createConnection(localConfig)

// Jaws database
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 8889, //change for Mac
    user: "root",
    password: "",
    database: "allergenius_db"
  });

}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;