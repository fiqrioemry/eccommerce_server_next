const { Products, Images, sequelize } = require("../../models");
const removeCloudinaryImage = require("../../utils/RemoveCloudImage");

module.exports = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    console.log(req.user);
    const { id } = req.params;
    const { name, description, price, stock, categoryId } = req.body;

    const product = await Products.findByPk(id);
    console.log(product.storeId);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    if (req.user.userRole !== "Admin") {
      if (product.storeId !== req.user.storeId) {
        return res.status(401).send({ message: "Unauthorized request" });
      }
    }

    await product.update(
      {
        name,
        description,
        price,
        stock,
        categoryId,
      },
      { transaction: t }
    );

    // check if user is attaching new images
    if (req.files.length) {
      const images = await Images.findAll({
        where: {
          productId: id,
        },
      });

      await Images.destroy(
        {
          where: {
            productId: id,
          },
        },
        { transaction: t }
      );

      const newImages = req.files.map((file) => ({
        image: file.path,
        productId: id,
      }));

      await Images.bulkCreate(newImages, { transaction: t });

      t.afterCommit(() => {
        //delete images from folder images
        images.forEach(async (image) => {
          removeCloudinaryImage(image.image);
        });
      });
    }

    await t.commit();

    return res.status(200).send({
      message: "updated successfully",
    });
  } catch (error) {
    await t.rollback();
    return res.status(500).send(error.message);
  }
};
