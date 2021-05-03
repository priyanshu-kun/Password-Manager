const connection = require("../config/mysql");
const { Encrypt, Decrypt } = require("../encryption/encrypt.password");

module.exports = {
    addNewPassword: (req, res) => {
        const { payload: { websiteURL, login, password, name, notes } } = req.body;
        const { iv, _password } = Encrypt(password);
        const query = "INSERT INTO passwords (webpage,login,password,name,notes,iv) VALUES(?,?,?,?,?,?);";
        const data = [websiteURL, login, _password, name, notes, iv];
        connection.query(query, data, (err, result) => {
            if (err) return res.status(500).send(err);
            console.log(result);
            res.status(200).json({ success: true });
        })
    },
    getAllPasswords: (req, res) => {
        const query = "SELECT * FROM passwords;";
        connection.query(query, (err, result) => {
            if (err) return res.status(500).send(err);
            res.status(200).send(result)
        })
    }
}