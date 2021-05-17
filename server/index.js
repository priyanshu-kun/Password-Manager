require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ success: true })
})

app.use("/api/passwords", require("./routes/passwords"));


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App is alive on ${port}`);
})