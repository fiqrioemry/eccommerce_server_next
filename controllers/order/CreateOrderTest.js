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
require("dotenv").config({
  path: "../../.env",
});

const midtransClient = require("midtrans-client");

let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.SERVER_KEY,
});

module.exports = async (req, res) => {
  const t = await sequelize.transaction();
  const userId = req.user.userId;
  try {
    const {
      storeId,
      customerName,
      customerAddress,
      totalPrice,
      shipmentCost,
      totalPay,
      productId,
      price,
      quantity,
      productName,
    } = req.body;

    const newOrder = await Orders.create(
      {
        userId,
        storeId,
        customerName,
        customerAddress,
        totalPrice,
        shipmentCost,
        totalPay,
      },
      { transaction: t }
    );

    // create transaction token and url from midtrans
    const parameters = {
      transaction_details: {
        order_id: newOrder.id,
        gross_amount: totalPay,
      },
      customer_details: {
        firtName: "John",
        lastName: "Phillips",
        email: "johnphillips@gmail.com",
        phone: "0868-9345-8203",
        address: customerAddress,
      },
    };

    const transaction = await snap.createTransaction(parameters);
    await OrderDetails.create(
      {
        orderId: newOrder.id,
        productId,
        price,
        quantity,
      },
      { transaction: t }
    );

    await t.commit();
    return res.status(200).send({
      message: "Order created",
      data: {
        transactionToken: transaction.token,
        transactionUrl: transaction.redirect_url,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: error.message || "Internal Server Error" });
  }
};
