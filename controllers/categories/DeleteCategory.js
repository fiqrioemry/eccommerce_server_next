const { ProductCategory } = require("../../models");
const removeCloudinaryImage = require("../../utils/RemoveCloudImage");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await ProductCategory.findByPk(id);

    if (!category) {
      return res.status(404).send({ message: "Category not found" });
    }

    // Menunggu penghapusan gambar dari Cloudinary
    removeCloudinaryImage(category.image);

    // Menghapus kategori
    await category.destroy();

    return res.status(200).send({
      success: true,
      message: "Category successfully deleted",
    });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};
