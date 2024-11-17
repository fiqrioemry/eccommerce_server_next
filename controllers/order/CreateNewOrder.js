module.exports = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { orderRequests } = req.body;

    const results = orderRequests.reduce((acc, item) => {
      const existing = acc.find((entry) => entry.storeId === item.storeId);

      if (existing) {
        existing.totalPrice += item.price * item.quantity;
        existing.shipmentCost = existing.totalPrice * 0.025;
      } else {
        const totalPrice = item.price * item.quantity;
        acc.push({
          storeId: item.storeId,
          totalPrice: totalPrice,
          shipmentCost: totalPrice * 0.025,
        });
      }

      return acc;
    }, []);

    return res.status(200).send({ message: "request success", data: results });
  } catch (error) {}
};

// userId
// storeId
// customerName
// customerAddress
// totalPrice
// shipmentCost
