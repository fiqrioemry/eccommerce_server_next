const CreateNewOrder = require("./CreateNewOrder");
const GetUserOrders = require("./GetUserOrders");
const UpdateOrderStatus = require("./UpdateOrderStatus");

// TODO : remove the testing route
const NewOrderTest = require("./CreateOrderTest");
const TransactionTest = require("./TransactionTest");

module.exports = {
  CreateNewOrder,
  GetUserOrders,
  UpdateOrderStatus,

  // TODO : Remove this testing route
  NewOrderTest,
  TransactionTest,
};
