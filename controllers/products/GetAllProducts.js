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
    if (search) {
      query[Op.or] = [
        { name: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `${search}` } },
      ];
    }

    if (category) {
      const found = await Categories.findOne({
        where: { slug: category },
      });
      if (found) {
        query.categoryId = found.id;
      } else {
        return res.status(404).send({ message: "Category not found" });
      }
    }

    if (minPrice && maxPrice) {
      query.price = {
        [Op.between]: [minPrice, maxPrice],
      };
    } else if (minPrice) {
      query.price = {
        [Op.gte]: minPrice,
      };
    } else if (maxPrice) {
      query.price = {
        [Op.lte]: maxPrice,
      };
    }

    if (minScore && maxScore) {
      query.rating = {
        [Op.between]: [minScore, maxScore],
      };
    } else if (minScore) {
      query.rating = {
        [Op.gte]: [minScore],
      };
    } else if (maxScore) {
      query.rating = {
        [Op.lte]: [maxScore],
      };
    }

    const product = await Products.findAndCountAll({
      where: query,
      limit: dataPerPage,
      offset: offset,
      include: [
        {
          model: Stores,
        },
        { model: Images },
        { model: Categories },
        { model: OrderDetails },
        { model: Reviews },
      ],
      distinct: true,
      order: [[sortBy || "createdAt", order || "asc"]],
    });

    if (product.count === 0) {
      return res.status(404).send({ message: "Product not found" });
    }
    const totalPage = Math.ceil(product.count / dataPerPage);

    if (currentPage > totalPage || currentPage < 1) {
      return res.status(404).send({ message: "Page not found" });
    }

    const data = product.rows.map((item) => {
      return {
        id: item.id,
        title: item.name,
        slug: item.slug,
        category: item.Category.slug,
        description: item.description,
        price: item.price,
        stock: item.stock,
        images: item.Images[0].image,
        sold: item?.OrderDetails.reduce(
          (total, item) => (total += item.quantity),
          0
        ),
        averageScore:
          item.Reviews.reduce((total, acc) => (total += acc.rating), 0) /
          item.Reviews.length,
        storeId: item.storeId,
        storeName: item.Store.storeName,
        storeSlug: item.Store.slug,
        storeCity: item.Store.city,
        storeImage: item.Store.image,
      };
    });
    return res.status(200).send({
      success: true,
      message: "success",
      data: data,
      totalProducts: product.count,
      currentPage,
      dataPerPage,
      totalPage,
      offset,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
