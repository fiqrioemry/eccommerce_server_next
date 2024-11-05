const { Products, Stores, Images, Categories } = require("../../models");

module.exports = async (req, res) => {
  try {
    const product = await Products.findAll({
      include: [
        {
          model: Stores,
          attributes: [],
        },
        { model: Images },
        { model: Categories },
      ],
    });

    return res.status(200).send({
      success: true,
      message: "success",
      data: product,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
