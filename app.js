require("dotenv").config();

const { urlencoded } = require("body-parser");
const express = require("express");
const path = require("node:path");
const cors = require("cors");
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const db = require("./src/database/config");

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running!`);
    console.log(`http://${HOST}:${PORT}`);
})