const Router = require("express").Router();
const { addNewPassword, getAllPasswords } = require("../controllers/password.controllers");

Router.post("/addNewPassword", addNewPassword);
Router.get("/getAllPasswords", getAllPasswords)

module.exports = Router;