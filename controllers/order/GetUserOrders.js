const {
  Orders,
  Stores,
  Products,
  Galleries,
  OrderDetails,
} = require("../../models");

module.exports = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { limit, page } = req.query;
    const currentPage = parseInt(page) || 1;
    const dataPerPage = parseInt(limit || 5);

    const orders = await Orders.findAndCountAll({
      limit: dataPerPage,
      offset: currentPage * 1 - dataPerPage,
      where: { userId },
      attributes: [
        "storeId",
        "customerName",
        "customerAddress",
        "totalPrice",
        "shipmentCost",
        "totalPay",
        "orderStatus",
        "shipmentStatus",
      ],
      include: [
        {
          model: OrderDetails,
          include: [
            {
              model: Products,
              include: [{ model: Galleries }, { model: Stores }],
              distinct: true,
            },
          ],
          distinct: true,
        },
      ],
      distinct: true,
    });

    if (orders.count === 0) {
      return res.status(404).send({ message: "Transactions not found" });
    }

    const totalPages = Math.ceil(orders.count / dataPerPage);

    return res.status(200).send({
      message: "success",
      data: orders.rows,
      totalData: orders.count,
      totalPages,
      currentPage,
      dataPerPage,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
