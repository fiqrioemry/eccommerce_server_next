const { fn, col, Op } = require("sequelize");
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
      search,
      category,
      minPrice,
      maxPrice,
      minScore,
      maxScore,
      limit,
      page,
      sortBy,
      order,
    } = req.query;

    const dataPerPage = parseInt(limit) || 8;
    const currentPage = parseInt(page) || 1;
    const offset = (currentPage - 1) * dataPerPage;

    const query = {};
    const having = {};

    if (search) {
      query[Op.or] = [
        { name: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `%${search}%` } },
      ];
    }

    if (category) {
      const found = await Categories.findOne({ where: { slug: category } });
      if (found) {
        query.categoryId = found.id;
      } else {
        return res.status(404).send({ message: "Category not found" });
      }
    }

    if (minPrice && maxPrice) {
      query.price = { [Op.between]: [minPrice, maxPrice] };
    } else if (minPrice) {
      query.price = { [Op.gte]: minPrice };
    } else if (maxPrice) {
      query.price = { [Op.lte]: maxPrice };
    }

    if (minScore && maxScore) {
      having[fn("COALESCE", fn("AVG", col("Reviews.rating")), 0)] = {
        [Op.between]: [minScore, maxScore],
      };
    } else if (minScore) {
      having[fn("COALESCE", fn("AVG", col("Reviews.rating")), 0)] = {
        [Op.gte]: minScore,
      };
    } else if (maxScore) {
      having[fn("COALESCE", fn("AVG", col("Reviews.rating")), 0)] = {
        [Op.lte]: maxScore,
      };
    }

    const countResult = await Products.findAll({
      where: query,
      include: [{ model: Reviews, attributes: [] }],
      group: ["Products.id"],
    });

    const totalProducts = countResult.length;
    const totalPage = Math.ceil(totalProducts / dataPerPage);

    if (currentPage > totalPage || currentPage < 1) {
      return res.status(404).send({ message: "Page not found" });
    }

    const product = await Products.findAndCountAll({
      where: query,
      limit: dataPerPage,
      offset: offset,
      attributes: {
        include: [
          [fn("COALESCE", fn("AVG", col("Reviews.rating")), 0), "rating"],
        ],
      },
      include: [
        { model: Stores },
        { model: Images },
        { model: Categories },
        { model: OrderDetails },
        { model: Reviews, attributes: [] },
      ],
      distinct: true,
      group: ["Products.id"],
      having,
      order: [[sortBy || "createdAt", order || "asc"]],
    });

    const data = product.rows.map((item) => ({
      id: item.id,
      title: item.name,
      category: item.Category.name,
      description: item.description,
      price: item.price,
      stock: item.stock,
      images: item.Images.map((img) => img.image),
      sold: item?.OrderDetails.reduce(
        (total, order) => total + order.quantity,
        0
      ),
      rating: parseFloat(item.dataValues.rating),
      storeId: item.storeId,
      storeName: item.Store.name,
      storeCity: item.Store.city,
      storeImage: item.Store.image,
    }));

    return res.status(200).send({
      success: true,
      message: "success",
      data,
      totalProducts,
      currentPage,
      dataPerPage,
      totalPage,
      offset,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
