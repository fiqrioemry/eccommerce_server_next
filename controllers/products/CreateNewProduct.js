const { Products, Images, sequelize } = require("../../models");

module.exports = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const storeId = req.user.storeId;

    const images = req.files;

    const { name, description, price, stock, categoryId } = req.body;

    if (!name || !description || !price || !stock || !categoryId)
      return res.status(400).send({ message: "All fields are required" });

    if (images.length === 0) {
      await t.rollback();
      return res.status(400).send({ error: "Must upload an image" });
    }

    const product = await Products.create(
      {
        name,
        description,
        price,
        stock,
        storeId,
        categoryId,
      },
      { transaction: t }
    );

    const productImages = images.map((file) => ({
      image: file.path,
      productId: product.id,
    }));

    await Images.bulkCreate(productImages, { transaction: t });

    await t.commit();

    return res.status(201).send({
      success: true,
      message: "Product is created",
    });
  } catch (error) {
    await t.rollback();
    return res.status(500).send(error.message);
  }
};
