const { Carts, Products } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const userId = req.user.userId;

    if (!quantity)
      return res
        .status(400)
        .send({ success: false, message: "Cart not found" });

    let cartItem = await Carts.findOne({ where: { id, userId } });

    if (!cartItem)
      return res
        .status(400)
        .send({ success: false, message: "Cart not found" });

    const product = await Products.findByPk(cartItem.productId);

    if (!product)
      return res
        .status(400)
        .send({ success: false, message: "Product not found" });

    if (quantity > product.stock)
      return res
        .status(400)
        .send({ success: false, message: "Product out of stock" });

    await cartItem.update({ quantity });

    return res.status(200).send({
      success: true,
      message: "Cart quantity updated",
      data: cartItem,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
