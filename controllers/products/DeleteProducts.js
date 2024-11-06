const { Products, Images, sequelize } = require("../../models");
const removeCloudinaryImage = require("../../utils/RemoveCloudImage");

module.exports = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { ids } = req.body;

    // 1.get all the products by ids
    const product = await Products.findAll({ where: { id: ids } });

    // 2. make sure the products is exist
    if (product.length === 0) {
      return res.status(404).send({ message: "Product not found" });
    }
    // 3. make sure only admin and user with the same storeId as storeId in product has access to delete
    if (req.user.userRole !== "admin") {
      const unauthorized = product.some((item) => item.storeId !== storeId);
      if (unauthorized) {
        return res.status(401).send({ message: "Unauthorized" });
      }
    }
    // 4. destroy all images on model Images
    await Images.destroy({ where: { productId: ids } }, { transaction: t });

    // 5. destroy all products on model products
    await Products.destroy({ where: { id: ids } }, { transaction: t });

    // 6. delete all url saved / related to cloud storage
    t.afterCommit(() => {
      productImages.forEach(async (image) => {
        removeCloudinaryImage(image.image);
      });
    });

    // 7. commit all the process
    await t.commit();

    return res.status(200).send({
      success: true,
      message: "Product is deleted",
    });
  } catch (error) {
    await t.rollback();
    return res.status(500).send(error.message);
  }
};
