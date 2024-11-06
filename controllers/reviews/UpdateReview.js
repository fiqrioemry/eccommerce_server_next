const { Reviews, Orders, OrderDetails } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Reviews.findByPk(id);

    if (order.length === 0) {
      return res.status(400).send({
        success: false,
        message: "Cannot review product before purchasement",
      });
    }

    // check if user has already reviewed the product
    const existingReviews = await Reviews.count({
      where: {
        userId,
        productId,
      },
    });

    if (existingReviews >= 1) {
      return res.status(400).send({
        success: false,
        message: "Cannot review product twice",
      });
    }

    const review = await Reviews.create({
      productId,
      userId,
      rating,
      comment,
    });

    return res.status(201).send({
      success: true,
      message: "Review is created",
      data: review,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
