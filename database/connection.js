const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Hanu-2430",
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