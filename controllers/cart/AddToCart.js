const { Carts, Products } = require("../../models");

module.exports = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { productId, quantity } = req.body;

    // 1. admin should not allowed to add item
    if (req.user.userRole === "Admin") {
      return res.status(500).send({ message: "Cannot made purchasement" });
    }
    if (typeof quantity !== "number" || quantity <= 0)
      // 1. check quantity is correct (format and quantity) ...
      return res
        .status(400)
        .send({ success: false, message: "Quantity Cannot 0 " });

    // 2. check product is exist ...
    const product = await Products.findByPk(productId);

    if (!product) {
      return res
        .status(400)
        .send({ success: false, message: "Product not found" });
    }
    // 4. seller not allowed to buy own product
    if (product.storeId === req.user.storeId) {
      return res.status(500).send({ message: "Cannot buy own product" });
    }

    let cartItem = await Carts.findOne({
      where: { productId, userId },
    });

    // 5. check quantity not exceed stock
    if (!cartItem) {
      if (quantity > product.stock)
        return res
          .status(400)
          .send({ success: false, message: "Product out of stock" });

      // 6. create cart if not exist
      await Carts.create({ userId, productId, quantity });
    } else {
      // 7. uppdate cart if exist
      const newQuantity = cartItem.quantity + quantity;

      if (newQuantity > product.stock) {
        return res.status(400).send({
          success: false,
          message: `Remaining Stock is ${product.stock}. You already have ${cartItem.quantity} in your cart `,
        });
      }

      await cartItem.update({ quantity: newQuantity });
    }

    return res.status(200).send({
      success: true,
      message: "Product added to cart",
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
