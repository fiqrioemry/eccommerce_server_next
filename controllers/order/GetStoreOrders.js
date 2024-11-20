const { Orders, Products, OrderDetails, Galleries } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const { storeId } = req.user?.storeId;

    if (!storeId) {
      return res.status(400).send({ error: "You don't have a store" });
    }

    const currentPage = parseInt(page) || 1;
    const dataPerPage = parseInt(limit) || 5;

    const orders = await Orders.findAndCountAll({
      limit: dataPerPage,
      currentPage,
      offset: currentPage * 1 - dataPerPage,
      where: { storeId },
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
          include: [{ model: Products }, { model: Galleries }],
          distinct: true,
        },
      ],
      distinct: true,
    });

    if (orders.count === 0) {
      res.status(400).send({ message: "Transaction not found" });
    }

    const totalPending = orders.rows.filter((order) => {
      return order.shippingStatus === "processing"; // TODO : add ENUM 'waiting_confirmation'
    });

    const totalPages = Math.ceil(orders.count / dataPerPage);
    return res.status(200).send({
      message: "success",
      data: orders.rows,
      totalData: orders.count,
      totalPages,
      currentPage,
      dataPerPage,
      totalPending: totalPending.length,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
