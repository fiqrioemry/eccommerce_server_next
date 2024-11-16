const { Products, Images, Reviews, Carts, sequelize } = require("../../models");
const removeCloudinaryImage = require("../../utils/RemoveCloudImage");

module.exports = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { ids } = req.body;

    // 1. Get all products
    const products = await Products.findAll({ where: { id: ids } });

    // 2. Check if products exist
    if (products.length === 0) {
      await t.rollback();
      return res.status(404).send({ message: "Product not found" });
    }

    // 3. Validate access
    if (req.user.userRole !== "Admin") {
      const unauthorized = products.some(
        (item) => item.storeId !== req.user?.storeId
      );
      if (unauthorized) {
        await t.rollback();
        return res.status(401).send({ message: "Unauthorized" });
      }
    }

    // 4. Delete related models
    await Images.destroy({ where: { productId: ids }, transaction: t });
    await Reviews.destroy({ where: { productId: ids }, transaction: t });
    await Carts.destroy({ where: { productId: ids }, transaction: t });
    await Products.destroy({ where: { id: ids }, transaction: t });

    // 5. Commit transaction
    await t.commit();

    // 6. Delete related cloudinary images after commit
    const productImages = products.flatMap((product) => product.images || []); // Adjust if your images are stored differently
    for (const image of productImages) {
      try {
        removeCloudinaryImage(image.image);
      } catch (err) {
        console.error(`Failed to delete image: ${image.image}`, err);
      }
    }

    return res.status(200).send({
      success: true,
      message: "Product is deleted",
    });
  } catch (error) {
    if (!t.finished) {
      await t.rollback();
    }
    return res.status(500).send({ message: error.message });
  }
};
