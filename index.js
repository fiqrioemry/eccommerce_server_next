require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

// routes
const user = require("./routes");

// setting
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.use("/api/users", user.UserRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
