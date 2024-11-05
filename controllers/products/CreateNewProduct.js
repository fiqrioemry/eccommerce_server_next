const { Products, ProductGalleries, sequelize } = require("../../models");

module.exports = async (req, res) => {
  try {
    const id = req.user.storeId;

    const { name, description, price, stock, categoryId } = req.body;

    if (!id) {
      return res.status(400).send({ error: "you don't have a store" });
    }

    if (req.files.length === 0) {
      return res
        .status(400)
        .send({ error: "You must upload at least 1 image" });
    }

    const product = await Products.create({
      name,
      description,
      price,
      stock,
      storeId: id,
      categoryId,
    });

    // mapping the array of images from payload
    const images = req.files.map((file) => ({
      image: file.path,
      productId: product.id,
    }));

    await ProductGalleries.bulkCreate(images, { transaction: t });

    await t.commit();

    return res.status(201).send({
      message: "successfully created",
      data: product,
    });
  } catch (error) {
    await t.rollback();
    return res.status(500).send(error.message);
  }
};
