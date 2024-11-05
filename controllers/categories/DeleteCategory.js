const { ProductCategory } = require("../../models");
const removeCloudinaryImage = require("../../utils/removeCloudinaryImage");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await ProductCategory.findByPk(id);
    if (!category) {
      return res.status(404).send({ message: "Category not found" });
    }

    removeCloudinaryImage(category.image);

    await category.destroy();

    return res.status(200).send({
      message: "deleted successfully",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
