const { Categories } = require("../../models");
const createSlug = require("../../utils/CreateSlug");

module.exports = async (req, res) => {
  try {
    const image = req.file.path;
    const { name } = req.body;
    const slug = createSlug(name);

    const existingCategory = await Categories.findOne({ where: { slug } });
    if (existingCategory) {
      return res.status(400).send({
        success: false,
        message: "Category with this name already exists",
      });
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
