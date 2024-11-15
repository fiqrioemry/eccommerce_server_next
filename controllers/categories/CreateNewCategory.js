const { Categories } = require("../../models");
const createSlug = require("../../utils/CreateSlug");
const removeCloudinaryImage = require("../../utils/RemoveCloudImage");

module.exports = async (req, res) => {
  try {
    const { name } = req.body;
    const image = req.file.path;
    const slug = createSlug(name);

    if (!name || !image) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const existingCategory = await Categories.findOne({
      where: { slug },
    });
    if (existingCategory) {
      removeCloudinaryImage(image);
      return res
        .status(400)
        .send({ success: false, message: "Category name already exists" });
    }
    const category = await Categories.create({
      name,
      image,
      slug,
    });

    return res.status(201).send({
      success: true,
      message: "New Category is successfully created",
      data: category,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
