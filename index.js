require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

// routes
const user = require("./routes");
const auth = require("./routes");

// setting
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.use("/api/users", user.UserRoute);
app.use("/api/auth", auth.AuthRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
