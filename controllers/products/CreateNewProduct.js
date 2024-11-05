const { Products, Images, sequelize } = require("../../models");

module.exports = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const id = req.user.storeId;

    const { name, description, price, stock, categoryId } = req.body;

    if (!id) {
      return res.status(400).send({ error: "Store not found" });
    }

    if (req.files.length === 0) {
      return res.status(400).send({ error: "Must upload an image" });
    }

    const product = await Products.create(
      {
        name,
        description,
        price,
        stock,
        storeId: id,
        categoryId,
      },
      { transaction: t }
    );

    // mapping the array of images from payload
    const images = req.files.map((file) => ({
      image: file.path,
      productId: product.id,
    }));

    await Images.bulkCreate(images, { transaction: t });

    await t.commit();

    return res.status(201).send({
      success: true,
      message: "Product is created",
      data: product,
    });
  } catch (error) {
    await t.rollback();
    return res.status(500).send(error.message);
  }
};
