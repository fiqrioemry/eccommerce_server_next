const {
  Users,
  Products,
  UserProfiles,
  Orders,
  OrderDetails,
  Stores,
  Carts,
  sequelize,
} = require("../../models");
// const midtransClient = require("midtrans-client");

// const snap = new midtransClient.Snap({
//   isProduction: false,
//   serverKey: process.env.SERVER_KEY,
// });

module.exports = async (req, res) => {
  const t = await sequelize.transaction();
  const userId = req.user.userId;
  const { orderCartId, customerAddress } = req.body;

  try {
    const user = await Users.findOne({
      where: { id: userId },
      include: [{ model: UserProfiles, attributes: ["name"] }],
    });

    const customerName = user.UserProfile?.name;
    // 1. get product detail from user selected cart for order
    const orderItem = await Carts.findAll({
      where: { userId, id: orderCartId },
      attributes: ["id", "quantity"],
      include: [
        {
          model: Products,
          attributes: ["id", "name", "price", "storeId", "stock"],
        },
      ],
    });

    const newOrders = orderItem.reduce((acc, curr) => {
      const newOrder = acc.find(
        (entry) => entry.storeId === curr.Product.storeId
      );
      if (!newOrder) {
        const totalPrice = curr.Product.price * curr.quantity;
        const shipmentCost = totalPrice * 0.025;
        const totalPay = totalPrice + shipmentCost;

        acc.push({
          userId,
          storeId: curr.Product.storeId,
          customerName,
          customerAddress,
          totalPrice,
          shipmentCost,
          totalPay,
        });
      } else {
        newOrder.totalPrice += curr.Product.price * curr.quantity;
        newOrder.shipmentCost = newOrder.totalPrice * 0.025;
      }
      return acc;
    }, []);

    return res.status(200).send({
      message: "Order created successfully",
      data: newOrders,
    });
  } catch (error) {
    await t.rollback();
    return res.status(500).send(error.message);
  }
};
