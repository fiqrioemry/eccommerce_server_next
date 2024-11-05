const { Products, Images, sequelize } = require("../../models");

module.exports = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const storeId = req.user.storeId;

    console.log(req.files);

    const image = req.files || req.file;

    const { name, description, price, stock, categoryId } = req.body;

    if (!name || !image || !description || !price || !stock || !categoryId) {
      return res.status(400).send({ message: "All fields are required" });
    }

    if (!storeId) {
      return res.status(400).send({ error: "you don't have a store" });
    }

    const product = await Products.create({
      name,
      description,
      price,
      stock,
      storeId,
      categoryId,
    });

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
