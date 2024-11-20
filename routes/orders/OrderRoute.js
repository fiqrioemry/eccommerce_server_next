const express = require("express");
const ordersController = require("../../controllers/order");
const { isAuthenticate } = require("../../middleware");
const router = express.Router();

router.post("/new", isAuthenticate, ordersController.CreateNewOrder);
router.put("/notification", ordersController.UpdateOrderStatus);

// TODO : route not tested yet
router.get("/", isAuthenticate, ordersController.GetUserOrders);

// TODO : Remove testing route
router.post("/test", isAuthenticate, ordersController.NewOrderTest);
router.post("/confirmation/test", ordersController.TransactionTest);
module.exports = router;
