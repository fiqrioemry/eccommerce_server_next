const express = require("express");
const ordersController = require("../../controllers/order");
const { isAuthenticate } = require("../../middleware");
const router = express.Router();

router.post("/", isAuthenticate, ordersController.CreateNewOrder);
router.get("/", isAuthenticate, ordersController.GetUserOrders);
module.exports = router;
