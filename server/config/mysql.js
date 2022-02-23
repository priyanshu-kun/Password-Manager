require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'sql6.freesqldatabase.com',
    user: 'sql6474372',
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