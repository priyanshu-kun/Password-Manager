require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./config/mysql");
const { json } = require("express");

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ success: true })
})

app.use("/api/passwords", require("./routes/passwords"));
app.use("/api/users", require("./routes/user"));


const port = process.env.PORT || 5000;
const host = "http://localhost:" + port;
app.listen(port, () => {
    console.log(`App is alive on ${host}`);
})