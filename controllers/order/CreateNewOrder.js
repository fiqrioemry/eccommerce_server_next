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
  const { orderCartId, customerAddress } = req.body;

  try {
    const user = await Users.findOne({
      where: { id: userId },
      include: [{ model: UserProfiles, attributes: ["name"] }],
    });

    const customerName = user.UserProfile.name;

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

    const orderLists = orderItem.reduce((acc, curr) => {
      const existingOrder = acc.find(
        (entry) => entry.storeId === curr.Product.storeId
      );
      const totalPrice = curr.Product.price * curr.quantity;

      if (!existingOrder) {
        const shipmentCost = totalPrice * 0.025;
        acc.push({
          userId,
          storeId: curr.Product.storeId,
          customerName,
          customerAddress,
          totalPrice,
          shipmentCost,
          totalPay: totalPrice + shipmentCost,
        });
      } else {
        existingOrder.totalPrice += totalPrice;
        existingOrder.shipmentCost = existingOrder.totalPrice * 0.025;
        existingOrder.totalPay =
          existingOrder.totalPrice + existingOrder.shipmentCost;
      }

      return acc;
    }, []);

    const newOrders = await Promise.all(
      orderLists.map(async (item) => {
        return await Orders.create(item, { transaction: t });
      })
    );

    // create transaction token and url from midtrans
    const parameters = {
      transaction_details: {
        order_id: newOrders.map((item) => item.id),
        gross_amount: newOrders.reduce((acc, curr) => acc + curr.totalPay, 0),
      },
      customer_details: {
        address: customerAddress,
      },
    };

    const transaction = await snap.createTransaction(parameters);

    await Promise.all(
      orderItem.map(async (item) => {
        const order = newOrders.find(
          (entry) => entry.storeId === item.Product.storeId
        );

        await OrderDetails.create(
          {
            orderId: order.id,
            productId: item.Product.id,
            price: item.Product.price,
            quantity: item.quantity,
          },
          { transaction: t }
        );

        await Products.decrement(
          "stock",
          { by: item.quantity, where: { id: item.Product.id } },
          { transaction: t }
        );

        await item.destroy({ transaction: t });
      })
    );

    await t.commit();

    return res.status(200).send({
      message: "Order created successfully",
      data: [
        newOrders,
        {
          transactionToken: transaction.token,
          transactionUrl: transaction.redirect_url,
        },
      ],
    });
  } catch (error) {
    await t.rollback();
    return res.status(500).send({ error: error.message });
  }
};
