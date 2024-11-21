require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
var cookies = require("cookie-parser");

// routes
const service = require("./routes");

// setting
app.use(cookies());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

app.use("/api/auth", service.AuthRoute);
app.use("/api/cart", service.CartRoute);
app.use("/api/users", service.UserRoute);
app.use("/api/order", service.OrderRoute);
app.use("/api/product", service.ProductRoute);
app.use("/api/category", service.CategoryRoute);
app.use("/api/rajaongkir", service.RajaOngkirRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
