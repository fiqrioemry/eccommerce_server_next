const {
  Orders,
  OrderDetails,
  Carts,
  Products,
  Users,
} = require("../../models");
// const midtransClient = require("midtrans-client");

// const snap = new midtransClient.Snap({
//   isProduction: false,
//   serverKey: process.env.SERVER_KEY,
// });

module.exports = async (req, res) => {
  // const t = await sequelize.transaction();
  try {
    const { orders } = req.body;

    return res.status(200).send({ message: "success", data: orders });
  } catch (error) {
    await t.rollback();
    return res.status(500).send(error.message);
  }
};
