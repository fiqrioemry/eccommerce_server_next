const { Categories } = require("../../models");
const createSlug = require("../../utils/CreateSlug");
const removeCloudinaryImage = require("../../utils/RemoveCloudImage");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const slug = createSlug(name);
    const image = req.file?.path;

    if (!name || !image) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const oldCategory = await Categories.findByPk(id);

    if (!oldCategory) {
      return res
        .status(404)
        .send({ success: false, message: "Category not found" });
    }

    const existingCategory = await Categories.findOne({ where: { slug } });

    if (existingCategory && existingCategory.id !== oldCategory.id) {
      // Only remove image if existingCategory has an image
      if (existingCategory.image) {
        removeCloudinaryImage(existingCategory.image);
      }
      return res
        .status(400)
        .send({ success: false, message: "Category name already exists" });
    }

    // If the image has changed, remove the old image
    if (image && oldCategory.image !== image) {
      if (oldCategory.image) {
        removeCloudinaryImage(oldCategory.image); // Remove old image only if it's different from the new one
      }
    }

    // Update the category with new data
    const updatedCategory = await oldCategory.update({ name, image, slug });

    return res.status(200).send({
      success: true,
      message: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};
