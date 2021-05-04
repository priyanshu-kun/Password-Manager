const Router = require("express").Router();
const { addNewPassword, getAllPasswords, decryptPassword } = require("../controllers/password.controllers");

Router.post("/addNewPassword", addNewPassword);
Router.get("/getAllPasswords", getAllPasswords);
Router.post("/decryptPassword", decryptPassword);

module.exports = Router;