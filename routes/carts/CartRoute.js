const express = require("express");
const cartController = require("../../controllers/cart");
const { isAuthenticate } = require("../../middleware");
const router = express.Router();

router.get("/", isAuthenticate, cartController.GetUserCart);
router.post("/add", isAuthenticate, cartController.AddToCart);
router.put("/update/:id", isAuthenticate, cartController.UpdateCart);
router.delete("/delete", isAuthenticate, cartController.DeleteCart);

module.exports = router;
