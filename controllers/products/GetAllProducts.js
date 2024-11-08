const {
  Products,
  Stores,
  Images,
  Categories,
  Reviews,
  OrderDetails,
} = require("../../models");

module.exports = async (req, res) => {
  try {
    const product = await Products.findAll({
      include: [
        {
          model: Stores,
        },
        { model: Images },
        { model: Categories },
        { model: OrderDetails },
        { model: Reviews },
      ],
    });

    const data = product.map((item) => {
      return {
        id: item.id,
        title: item.name,
        category: item.Category.name,
        description: item.description,
        price: item.price,
        stock: item.stock,
        images: item.Images.map((item) => item.image),
        sold: item?.OrderDetails.reduce(
          (total, item) => (total += item.quantity),
          0
        ),
        reviews: item.Reviews,
        storeId: item.storeId,
        storeName: item.storeName,
        storeCity: item.Store.city,
        storeImage: item.Store.image,
      };
    });
    return res.status(200).send({
      success: true,
      message: "success",
      data: data,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
