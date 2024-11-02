require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
