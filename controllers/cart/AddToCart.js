const { Carts, Products } = require("../../models");

module.exports = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { productId, quantity } = req.body;

    if (!productId || !quantity)
      return res
        .status(400)
        .send({ success: false, message: "All field required" });

    if (typeof quantity !== "number" || quantity <= 0)
      return res
        .status(400)
        .send({ success: false, message: "Quantity Cannot 0 " });

    const product = await Products.findByPk(productId);

    if (!product) {
      return res
        .status(400)
        .send({ success: false, message: "Product not found" });
    }

    let cartItem = await Carts.findOne({
      where: { productId, userId },
    });

    if (!cartItem) {
      if (quantity > product.stock)
        return res
          .status(400)
          .send({ success: false, message: "Product out of stock" });

      await Carts.create({ userId, productId, quantity });
    } else {
      const newQuantity = cartItem.quantity + quantity;

      if (newQuantity > product.stock) {
        return res
          .status(400)
          .send({ success: false, message: "Product out of stock" });
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
