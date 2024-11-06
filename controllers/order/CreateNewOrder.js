const {
  Orders,
  OrderDetails,
  Carts,
  Products,
  Users,
} = require("../../models");

module.exports = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const userId = req.user.userId;
    const { cartIds, address } = req.body;

    const cartItem = await Carts.findAll({
      where: { id: cartIds, userId: userId },
    });
  } catch (error) {
    await t.rollback();
    return res.status(500).send(error.message);
  }
};
