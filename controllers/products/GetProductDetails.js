const { Products, Images } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findByPk(id, {
      include: [{ model: Images }],
    });

    if (!product)
      return res.status(400).send({
        success: false,
        message: "Product not found",
      });

    const storeId = product.storeId;
    const categoryId = product.categoryId;
    const name = product.name;
    const description = product.description;
    const price = product.description;
    const stock = product.stock;
    const images = product.Images.map((item) => {
      return item.image;
    });
    return res.status(200).send({
      success: true,
      message: "success",
      data: { storeId, categoryId, name, description, price, stock, images },
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
