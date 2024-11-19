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

// Aggregate orders by storeId
const aggregatedOrders = orderRequests.reduce((acc, item) => {
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

// Create orders in bulk
const orders = await Orders.bulkCreate(aggregatedOrders, {
  transaction: t,
});

// Process each order request
for (const order of orderRequests) {
  // Remove item from cart
  await Carts.destroy(
    { where: { id: order.id, userId: userId } },
    { transaction: t }
  );

  // Decrement stock
  await Products.decrement(
    "stock",
    { by: order.quantity, where: { id: order.productId } },
    { transaction: t }
  );

  // Find matching order and create OrderDetails
  const relatedOrder = orders.find((o) => o.storeId === order.storeId);

  await OrderDetails.create(
    {
      orderId: relatedOrder.id,
      productId: order.productId,
      price: order.price,
      quantity: order.quantity,
    },
    { transaction: t }
  );
}

// Calculate gross amount for Midtrans
// const grossAmount = aggregatedOrders.reduce(
//   (total, order) => total + order.totalPay,
//   0
// );

// const parameters = {
//   transaction_details: {
//     order_id: `ORDER-${Date.now()}`, // Ensure a unique order ID
//     gross_amount: grossAmount,
//   },
//   customer_details: {
//     name: customerName,
//     email: customerEmail,
//     address: customerAddress,
//   },
// };

// Create Midtrans transaction
// const transaction = await snap.createTransaction(parameters);

// await t.commit();
