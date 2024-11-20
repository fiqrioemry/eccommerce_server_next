const midtransClient = require("midtrans-client");
const { Order, OrderDetails, Product } = require("../../models");
require("dotenv").config({
  path: "../../.env",
});
const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.SERVER_KEY,
  clientKey: process.env.CLIENT_KEY,
});

module.exports = async (req, res) => {
  try {
    const { transaction } = req.body;
    const statusResponse = await snap.transaction.notification(transaction);

    let orderId = statusResponse.order_id;
    let transactionStatus = statusResponse.transaction_status;
    let fraudStatus = statusResponse.fraud_status;

    return res.status(200).send({
      message: "Order status updated",
      data: transactionStatus,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
