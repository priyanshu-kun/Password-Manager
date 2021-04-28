require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./config/mysql");

app.get("/", (req, res) => {
    res.json({ success: true })
})


const port = process.env.PORT || 5000;
const host = "http://localhost:" + port;
app.listen(port, () => {
    console.log(`App is alive on ${host}`);
})