const Router = require("express").Router();
const { addNewPassword, getAllPasswords, decryptPassword, deleteRecord } = require("../controllers/password.controllers");

Router.post("/addNewPassword", addNewPassword);
Router.get("/getAllPasswords", getAllPasswords);
Router.post("/decryptPassword", decryptPassword);
Router.delete("/deleteRecord", deleteRecord);

module.exports = Router;