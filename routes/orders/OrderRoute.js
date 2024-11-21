const express = require("express");
const ordersController = require("../../controllers/order");
const { isAuthenticate } = require("../../middleware");
const router = express.Router();

router.post("/new", isAuthenticate, ordersController.CreateNewOrder);
router.post("/notification", ordersController.UpdateOrderStatus);

// TODO : route not tested yet
router.get("/", isAuthenticate, ordersController.GetUserOrders);

// TODO : Remove testing route
router.post("/test", isAuthenticate, ordersController.NewOrderTest);
module.exports = router;
