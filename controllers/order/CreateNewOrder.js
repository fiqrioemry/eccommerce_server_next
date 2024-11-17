const { Users, Orders, OrderDetails } = require("../../models");

module.exports = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { orderRequests } = req.body;

    const user = await Users.findOne({
      where: { id: userId },
      include: [{ model: UserProfiles, attributes: ["name", "address"] }],
    });

    const results = orderRequests.reduce((acc, item) => {
      const existing = acc.find((entry) => entry.storeId === item.storeId);

      if (existing) {
        // existing.userName = user.UserProfile.name;
        // existing.userAddress = user.UserProfile.address;
        existing.totalPrice += item.price * item.quantity;
        existing.shipmentCost = existing.totalPrice * 0.025;
      } else {
        const totalPrice = item.price * item.quantity;
        acc.push({
          storeId: item.storeId,
          // userName: user.userProfile.name,
          // userAddress: user.userProfile.address,
          totalPrice: totalPrice,
          shipmentCost: totalPrice * 0.025,
        });
      }

      return acc;
    }, []);

    return res
      .status(200)
      .send({ message: "request success", data: results, user });
  } catch (error) {}
};

// userId
// storeId
// customerName
// customerAddress
// totalPrice
// shipmentCost
