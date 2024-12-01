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
      city,
      category,
      minPrice,
      maxPrice,
      minRating,
      maxRating,
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
        { description: { [Op.like]: `%${search}%` } },
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

    if (city) {
      const foundStores = await Stores.findAll({
        where: {
          city: Array.isArray(city) ? { [Op.in]: city } : city,
        },
      });
      if (foundStores.length > 0) {
        query.storeId = { [Op.in]: foundStores.map((store) => store.id) };
      } else {
        return res
          .status(404)
          .send({ message: "Stores not found in the specified cities" });
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

    // Query ke database
    const product = await Products.findAll({
      where: query,
      include: [
        {
          model: Reviews,
          attributes: ["rating"],
        },
        { model: Stores },
        { model: Images },
        { model: Categories },
        { model: OrderDetails },
      ],
      order: [[sortBy || "createdAt", order || "asc"]],
    });

    if (!product.length) {
      return res.status(404).send({ message: "Product not found" });
    }

    // Proses hasil query untuk filter minRating dan maxRating
    const filteredData = product
      .map((item) => {
        const averageScore =
          item.Reviews.length > 0
            ? item.Reviews.reduce((acc, curr) => acc + curr.rating, 0) /
              item.Reviews.length
            : 0;

        return {
          id: item.id,
          title: item.name,
          slug: item.slug,
          category: item.Category.slug,
          description: item.description,
          price: item.price,
          stock: item.stock,
          images: item.Images[0]?.image || null,
          sold: item?.OrderDetails.reduce(
            (total, detail) => (total += detail.quantity),
            0
          ),
          averageScore,
          storeId: item.storeId,
          storeName: item.Store.storeName,
          storeSlug: item.Store.slug,
          storeCity: item.Store.city,
          storeImage: item.Store.image,
        };
      })
      .filter(
        (item) =>
          (!minRating || item.averageScore >= minRating) &&
          (!maxRating || item.averageScore <= maxRating)
      );

    // Pagination setelah filter
    const paginatedData = filteredData.slice(offset, offset + dataPerPage);
    const totalProducts = filteredData.length;
    const totalPage = Math.ceil(totalProducts / dataPerPage);

    if (currentPage > totalPage || currentPage < 1) {
      return res.status(404).send({ message: "Page not found" });
    }

    return res.status(200).send({
      success: true,
      message: "success",
      data: paginatedData,
      totalProducts,
      currentPage,
      dataPerPage,
      totalPage,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
