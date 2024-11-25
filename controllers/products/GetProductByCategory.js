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
    const { slug } = req.params;

    const category = await Categories.findOne({ where: { slug: slug } });

    const product = await Products.findAll({
      where: { categoryId: category.id },
      include: [
        {
          model: Stores,
        },
        { model: Images },
        { model: Categories },
        { model: OrderDetails },
      ],
    });
    const data = product.map((item) => {
      return {
        id: item.id,
        title: item.name,
        slug: item.slug,
        category: item.Category.slug,
        price: item.price,
        stock: item.stock,
        images: item.Images[0].image,
        sold: item?.OrderDetails.reduce(
          (total, item) => (total += item.quantity),
          0
        ),
        storeId: item.storeId,
        storeSlug: item.Store.slug,
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
