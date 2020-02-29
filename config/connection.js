var mysql = require("mysql");

var connection;
console.log("Process ENV DBHOST: " + process.env.NODE_ENV)
if (process.env.DB_HOST) {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    console.log("TRUE --");

} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}
connection.connect();
module.exports = connection;
