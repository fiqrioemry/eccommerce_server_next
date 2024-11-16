require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
var cookies = require("cookie-parser");

// routes
const service = require("./routes");

// setting
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookies());

app.use("/api/users", service.UserRoute);
app.use("/api/auth", service.AuthRoute);
app.use("/api/category", service.CategoryRoute);
app.use("/api/product", service.ProductRoute);
app.use("/api/cart", service.CartRoute);
app.use("/api/order", service.OrderRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
