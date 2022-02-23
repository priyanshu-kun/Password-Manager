require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({ 
    host: 'localhost', 
    user: 'root', 
    password: "$BillionaireBaby", 
    database: 'passwordManager' 
})


connection.connect(err => {
    if (err) {
        throw new Error(err);
    }
    console.log("Connection established");
})

module.exports = connection;
