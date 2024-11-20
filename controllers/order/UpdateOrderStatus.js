const midtransClient = require("midtrans-client");
const { Orders, OrderDetails, Products } = require("../../models");
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
    const statusResponse = await snap.transaction.notification(req.body);
    console.log("status Respons :", statusResponse);
    let orderId = statusResponse.order_id;
    let transactionStatus = statusResponse.transaction_status;
    let fraudStatus = statusResponse.fraud_status;

    let orderStatus = "";
    let shipmentStatus = "waiting_payment";
    if (transactionStatus == "capture") {
      // capture only applies to card transaction, which you need to check for the fraudStatus
      if (fraudStatus == "challenge") {
        // TODO set transaction status on your databaase to 'challenge'
        orderStatus = "challenge";
      } else if (fraudStatus == "accept") {
        // TODO set transaction status on your databaase to 'success'
        orderStatus = "success";
        shipmentStatus = "processing";
      }
    } else if (transactionStatus == "settlement") {
      orderStatus = "success";
      shipmentStatus = "processing";
    } else if (transactionStatus == "deny") {
      // TODO you can ignore 'deny', because most of the time it allows payment retries
      // and later can become success
    } else if (transactionStatus == "cancel" || transactionStatus == "expire") {
      // TODO set transaction status on your databaase to 'failure'
      orderStatus = "failed";
      shipmentStatus = "cancelled";
    } else if (transactionStatus == "pending") {
      // TODO set transaction status on your databaase to 'pending' / waiting payment
      orderStatus = "pending";
    }

    const result = await Orders.findAll({
      where: { id: orderId },
      attributes: ["id", "orderStatus"],
      include: [{ model: OrderDetails, attributes: ["quantity", "productId"] }],
    });

    const orders = result.map((order) => {
      const { id, orderStatus, OrderDetails } = order.toJSON();
      return {
        id,
        orderStatus,
        ...OrderDetails[0],
      };
    });

    if (orderStatus === "success") {
      Orders.update(
        { orderStatus, shipmentStatus },
        { where: { id: orderId } }
      );
    } else if (orderStatus === "failed") {
      orders.forEach(async (item) => {
        const { id, quantity } = item;
        const product = await Products.findByPk(id);
        const newStock = product.stock + quantity;
        await product.update({ stock: newStock });
      });
    }

    await Orders.update(
      { orderStatus, shipmentStatus },
      { where: { id: orderId } }
    );

    return res.status(200).send({
      message: "Order status is updated",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
