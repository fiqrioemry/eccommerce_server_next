const {
  Orders,
  Stores,
  Products,
  Galleries,
  OrderDetails,
} = require("../../models");

module.exports = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    const orders = await Orders.findByPk(orderId);

    if (!orders) return res.status(400).send({ message: "Order not found" });

    let shipmentStatus = "";
    if (status === "processing") {
      shipmentStatus = "processing";
    } else if (status === "shipped") {
      shipmentStatus = "shipped";
    } else if (status === "cancelled") {
      shipmentStatus = "shipped";
    }

    await orders.update({ shipmentStatus });

    return res.status(200).send({ message: "Order is updated", data: orders });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
