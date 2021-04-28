const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'password manager'
})

if (connection) {
    console.log("App connected to database successfully...");
}

module.exports = connection;