const { Categories } = require("../../models");

module.exports = async (req, res) => {
  try {
    const category = await Categories.findAll();

    return res.status(200).send({
      success: true,
      message: "success",
      data: category,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
