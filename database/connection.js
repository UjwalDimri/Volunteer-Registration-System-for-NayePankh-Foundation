const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "@Hello1to9",
    database: "nayepankh"
});

connection.connect((err) => {
    if (err) {
        console.log("Connection Failed");
        console.log(err);
    } else {
        console.log("Database Connected Successfully");
    }
});

module.exports = connection;