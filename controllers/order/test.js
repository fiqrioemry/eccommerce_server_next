const { Users, UserProfiles } = require("../../models");

module.exports = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const { orderRequests } = req.body;

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

    const results = orderRequests.reduce((acc, item) => {
      const existing = acc.find((entry) => entry.storeId === item.storeId);

      if (existing) {
        existing.totalPrice += item.price * item.quantity;
      } else {
        const totalPrice = item.price * item.quantity;
        const shipmentCost = totalPrice * 0.025;
        acc.push({
          storeId: item.storeId,
          customerName: user.UserProfile.name,
          customerAddress: user.UserProfile.address,
          totalPrice: totalPrice,
          shipmentCost: shipmentCost,
          totalPay: totalPrice + shipmentCost,
        });
      }

      return acc;
    }, []);

    return res.status(200).send({ message: "Request success", data: results });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error", error });
  }
};
