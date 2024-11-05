const { Products, Images, sequelize } = require("../../models");
const removeCloudinaryImage = require("../../utils/RemoveCloudImage");

module.exports = async (req, res) => {
  try {
    console.log("product id ........................  :", req.params);

    return res.status(200).send({
      message: "Product is updated",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
