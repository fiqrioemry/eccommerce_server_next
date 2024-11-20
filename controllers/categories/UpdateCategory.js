const { Categories } = require("../../models");
const createSlug = require("../../utils/CreateSlug");
const removeCloudinaryImage = require("../../utils/RemoveCloudImage");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const slug = createSlug(name);
    const image = req.file?.path;

    // 1. check field not blank ...
    if (!name || !image) {
      return res.status(400).send({ message: "All fields are required" });
    }

    // 2. check id from request is exist ...
    const oldCategory = await Categories.findByPk(id);

    if (!oldCategory) {
      return res
        .status(404)
        .send({ success: false, message: "Category not found" });
    }

    // 3. check category not duplicate name ...
    const existingCategory = await Categories.findOne({ where: { slug } });

    if (existingCategory && existingCategory.id !== oldCategory.id) {
      if (existingCategory.image) {
        removeCloudinaryImage(existingCategory.image);
      }
      return res
        .status(400)
        .send({ success: false, message: "Category name already exists" });
    }

    // 4. remove old image from cloud ...
    if (image && oldCategory.image !== image) {
      if (oldCategory.image) {
        removeCloudinaryImage(oldCategory.image);
      }
    }

    // 5. update with new data ...
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
