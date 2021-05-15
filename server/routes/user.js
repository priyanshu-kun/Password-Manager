const Router = require("express").Router();
const {
    registerUser,
    getMe,
    loginUser,
    deleteUser,
    updateUser,
    logOut } = require("../controllers/users.controllers");

Router.post("/addNewUser", registerUser);
Router.post("/loginUser", loginUser);
Router.get("/getMe", getMe);
Router.delete("/deleteUser", deleteUser);
Router.put("/updateUser", updateUser);
Router.post("/logOut", logOut);

module.exports = Router;