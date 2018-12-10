// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "Nyjets$41",
    database: "burgers_db"
});

// Make Connection

connection.connect(function(err) {
    if (err) {
        console.log("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//export connection to ORM

module.exports = connection;