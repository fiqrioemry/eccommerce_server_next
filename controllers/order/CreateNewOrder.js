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
  } catch (error) {
    await t.rollback();
    return res.status(500).send(error.message);
  }
};
