const { Op } = require("sequelize");
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
    const {
      limit,
      page,
      search,
      category,
      minPrice,
      maxPrice,
      minScore,
      maxScore,
    } = req.query;

    const dataPerPage = parseInt(limit) || 10;
    const currentPage = parseInt(page) || 0;
    const offset = currentPage - 1 * dataPerPage;

    const query = {};
    if (search) {
      query[Op.or] = [
        { name: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `${search}` } },
      ];
    }

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
        averageScore:
          item.Reviews.reduce((total, acc) => (total += acc.rating), 0) /
          item.Reviews.length,
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
