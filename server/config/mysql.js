require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "mysql",
    user: 'root',
    password: "password",
    database: 'password-manager',
    connectionLimit: 10
})

connection.connect(err => {
    if (err) {
        throw new Error(err);
    }
    console.log("Connection established");
})

module.exports = connection;