const { Orders } = require("../../models");

module.exports = async (req, res) => {
  try {
    const userId = req.user.userId;

    if (!userId) {
      return res.status(400).send({ error: "Invalid user id" });
    }

    const orders = await Orders.findAll({ where: { userId: userId } });

    return res.status(200).send({
      message: "success",
      data: orders,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
