const connection = require("../config/mysql");
const bcrypt = require("bcrypt");
const { Encrypt, Decrypt } = require("../encryption/encrypt.password");

module.exports = {
    registerUser: async (req, res) => {
        try {
            let { payload: { username,email,password } } = req.body;
            password = await bcrypt.hash(password,12)
            const query = "INSERT INTO users (username,email,password) VALUES(?,?,?);";
            const data = [username,email,password];
            connection.query(query, data, (err, result) => {
                if (err) return res.status(500).send(err);
                console.log(result);
                res.status(200).json({ success: true });
            })
        }
        catch(e) {
            throw new Error(e)
        }
    },
    // loginUser: (req,res) => {

    // },
    // getMe: (req, res) => {
        // res.send(req.user);
       
    // },
    deleteUser: async (req, res) => {
       try {
            const id = req.body;
       }
       catch(e) {

       }
    },
    updateUser: async (req, res) => {
        try {
            const id = req.body;
       }
       catch(e) {

       }
    },
    // logOut: (req,res) => {

    // }
}