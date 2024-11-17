const {
  Users,
  UserProfiles,
  Orders,
  OrderDetails,
  sequelize,
} = require("../../models");
const midtransClient = require("midtrans-client");

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.SERVER_KEY,
});

module.exports = async (req, res) => {
  const t = await sequelize.transaction();
  const userId = req.user.userId;
  const { orderRequests } = req.body;
  try {
    const user = await Users.findOne({
      where: { id: userId },
      include: [
        {
          model: UserProfiles,
          attributes: ["name", "address"],
        },
      ],
    });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const customerName = user.UserProfile.name;
    const customerEmail = user.email;
    const customerAddress = user.UserProfile.address;

    const results = orderRequests.reduce((acc, item) => {
      const existing = acc.find((entry) => entry.storeId === item.storeId);

      if (existing) {
        existing.totalPrice += item.price * item.quantity;
      } else {
        const totalPrice = item.price * item.quantity;
        const shipmentCost = totalPrice * 0.025;

        acc.push({
          userId,
          storeId: item.storeId,
          customerName,
          customerAddress,
          totalPrice,
          shipmentCost,
          totalPay: totalPrice + shipmentCost,
        });
      }

      return acc;
    }, []);

    const orders = await Orders.bulkcreate({ results }, { transaction: t });

    const parameters = {
      transaction_details: {
        order_id: orders.id,
        gross_amount: orders.reduce((acc, curr) => acc + curr.totalPay, 0),
      },
      customer_details: {
        customerName,
        customerEmail,
        customerAddress,
      },
    };
    const transaction = await snap.createTransaction(parameters);

    return res.status(200).send({ message: "request success", data: results });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error", error });
  }
};
