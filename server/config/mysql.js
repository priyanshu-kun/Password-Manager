const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'password manager'
})

connection.connect(err => {
    if (err) {
        throw new Error("Error connecting to Db");
    }
    console.log("Connection established");
})

module.exports = connection;