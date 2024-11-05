const { Categories } = require("../../models");
const createSlug = require("../../utils/CreateSlug");
const removeCloudinaryImage = require("../../utils/RemoveCloudImage");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const slug = createSlug(name);
    const image = req.file.path;

    const oldCategory = await Categories.findByPk(id);

    if (!oldCategory) {
      return res
        .status(404)
        .send({ success: false, message: "Category not found" });
    }

    // Periksa apakah kategori dengan slug baru sudah ada
    const existingCategory = await Categories.findOne({ where: { slug } });
    if (existingCategory && existingCategory.id !== oldCategory.id) {
      removeCloudinaryImage(image); //<--- hapus file.path yang telah diupload terlebih dahulu
      return res
        .status(400)
        .send({ success: false, message: "Category name already exists" });
    }

    removeCloudinaryImage(existingCategory.image);
    await oldCategory.update({ name, image, slug });

    return res.status(200).send({
      success: true,
      message: "Category is successfully updated",
      data: oldCategory,
    });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};
