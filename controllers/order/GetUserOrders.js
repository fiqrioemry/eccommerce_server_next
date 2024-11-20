const {
  Orders,
  Products,
  OrderDetails,
  Galleries,
  Stores,
} = require("../../models");

module.exports = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { limit, page } = req.query;
    const dataPerPage = parseInt(limit || 5);
    const currentPage = parseInt(page) || 1;

    const orders = await Orders.findAndCountAll({
      limit: dataPerPage,
      offset: currentPage * 1 - dataPerPage,
      where: { userId },
      attributes: [
        "userId",
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
            { model: Products },
            { model: Galleries },
            { model: Stores },
          ],
        },
      ],
      distinct: true,
      order: "asc",
    });

    return res.status(200).send({
      message: "success",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
