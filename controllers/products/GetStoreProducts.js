const { Products, Categories, Images } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Products.findAll({
      where: { storeId: id },
      include: [{ model: Categories }, { model: Images }],
    });
    if (!product)
      return res
        .status(400)
        .send({ success: false, message: "Store has no product" });

    return res
      .status(200)
      .send({ success: true, message: "success", data: product });
  } catch (error) {
    await t.rollback();
    return res.status(500).send(error.message);
  }
};
