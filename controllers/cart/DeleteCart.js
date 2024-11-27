const { Carts } = require("../../models");

module.exports = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { productId } = req.params;

    const cart = await Carts.findOne({
      where: { productId, userId },
    });

    if (!cart) {
      return res
        .status(400)
        .send({ success: false, message: "Product not found in cart" });
    }

    await cart.destroy();

    return res
      .status(200)
      .send({ success: true, message: "Product deleted from cart" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
