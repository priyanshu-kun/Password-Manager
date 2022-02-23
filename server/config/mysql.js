require("dotenv").config();
const mysql = require("mysql2");

onst connection = mysql.createConnection({ 
    host: 'localhost', 
    user: 'root', 
    password: "password", 
    database: 'passwordManager' 
})


connection.connect(err => {
    if (err) {
        throw new Error(err);
    }
    console.log("Connection established");
})

module.exports = connection;
