const {
  Order,
  Product,
  Store,
  OrderDetails,
  sequelize,
} = require("../../models");

module.exports = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const orderId = req.params.id;

    const order = await Order.findOne({
      where: { id: orderId },
      include: {
        model: OrderDetails,
        include: {
          model: Product,
          as: "product",
          attributes: ["price"],
        },
      },
      transaction: t,
    });

    if (order.userId !== req.user.userId) {
      await t.rollback();
      return res.status(401).send({ message: "Unauthorized request" });
    }

    if (order.orderStatus !== "success") {
      await t.rollback();
      return res
        .status(401)
        .send({ message: "You have not paid for your purchase yet." });
    }

    if (order.shippingStatus === "delivered") {
      await t.rollback();
      return res.status(400).send({
        message:
          "can't confirm order, because you have already confirmed the order",
      });
    }

    if (!order.trackingNumber) {
      await t.rollback();
      return res.status(400).send({
        message:
          "The seller has not shipped the product yet. Please wait until there is a tracking number.",
      });
    }
    // update shipping delivery status
    await order.update(
      {
        shippingStatus: "delivered",
      },
      { transaction: t }
    );

    // update NextCoin Balance
    await Store.increment(
      { nextCoinBalance: order.totalPrice },
      { where: { id: order.storeId }, transaction: t }
    );

    await t.commit();

    return res.status(200).send({
      message: "updated successfully",
    });
  } catch (error) {
    await t.rollback();
    return res.status(500).send(error.message);
  }
};
