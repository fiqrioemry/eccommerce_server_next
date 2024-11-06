const { Carts, Products, Images, Stores, Sequelize } = require("../../models");

module.exports = async (req, res) => {
  try {
    const userId = req.user.userId;

    const cartItem = await Carts.findAll({
      where: { userId },
      attributes: ["id", "quantity"],
      include: [
        {
          model: Products,
          attributes: ["id", "name", "price", "storeId", "stock"],
          include: [
            {
              model: Images,
              attributes: ["image"],
            },
            {
              model: Stores,
              attributes: ["storeName", "image", "city"],
            },
          ],
        },
      ],
      order: [[Sequelize.literal("`Product->Store`.`storeName`"), "ASC"]],
    });

    const data = cartItem.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
        productId: item.Product?.id,
        storeId: item.Product?.storeId,
        name: item.Product?.name,
        price: item.Product?.price,
        stock: item.Product?.stock,
        images: item.Product?.Images.map((item) => item.image),
        storeName: item.Product?.Store?.storeName,
        storeImage: item.Product?.Store?.image,
        storeCity: item.Product?.Store?.city,
      };
    });
    const cartData = {
      cart: data,
      totalItem: cartItem.length,
    };

    return res.status(200).send({
      success: true,
      message: "success",
      data: cartItem.length === 0 ? "Empty cart" : cartData,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
