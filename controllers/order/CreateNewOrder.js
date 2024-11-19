const {
  Users,
  Products,
  UserProfiles,
  Orders,
  OrderDetails,
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
  const { orderCartId, address } = req.body;

  try {
    const user = await Users.findByPk({
      where: { id: userId },
      include: [{ model: UserProfiles, attributes: ["name"] }],
    });

    const customerName = user.UserProfile?.name;
    // 1. get product detail from user selected cart for order
    const orderItem = await Carts.findAll({
      where: { id: orderCartId, userId },
    });

    const orders = orderItem.reduce((acc, curr) => {
      const newOrder = acc.find((entry) => entry.storeId === curr.storeId);
      if (!newOrder) {
        acc.push({});
      }
    });
    return res.status(200).send({
      message: "Order created successfully",
      data: orderItem,
    });
  } catch (error) {
    await t.rollback();
    return res.status(500).send(error.message);
  }
};
