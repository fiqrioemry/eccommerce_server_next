const express = require("express");
const { isAuthenticate } = require("../../middleware");
const cartController = require("../../controllers/cart");

const router = express.Router();
router.get("/", isAuthenticate, cartController.GetUserCart);
router.post("/add", isAuthenticate, cartController.AddToCart);
router.delete("/delete", isAuthenticate, cartController.DeleteCart);
router.put("/update/:id", isAuthenticate, cartController.UpdateCart);
module.exports = router;
