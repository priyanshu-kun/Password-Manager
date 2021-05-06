const Router = require("express").Router();
const { addNewPassword, getAllPasswords, decryptPassword, deleteRecord, updateRecord } = require("../controllers/password.controllers");

Router.post("/addNewPassword", addNewPassword);
Router.get("/getAllPasswords", getAllPasswords);
Router.post("/decryptPassword", decryptPassword);
Router.delete("/deleteRecord", deleteRecord);
Router.put("/updateRecord", updateRecord);

module.exports = Router;