const {
  Products,
  Images,
  Reviews,
  Categories,
  OrderDetails,
  Stores,
} = require("../../models");

module.exports = async (req, res) => {
  try {
    const { slug } = req.params;
    const store = await Stores.findOne({
      where: { slug },
      include: [
        {
          model: Products,
          attributes: ["categoryId", "name", "slug", "price"],
          include: [
            { model: Images, attributes: ["image"] },
            { model: Reviews, attributes: ["rating", "comment", "userId"] },
            { model: Categories, attributes: ["name", "slug", "image"] },
          ],
        },
      ],
    });

    if (!store)
      return res.status(400).send({
        success: false,
        message: "Store not found",
      });

    const data = {
      storeId: store.id,
      title: store.storeName,
      storeSlug: store.slug,
      description: store.description,
      image: store.image,
      city: store.city,
      products: store.Products?.reduce((acc, curr) => {
        const { name, categoryId, slug, price, Images, Reviews, Category } =
          curr;
        const productImage = Images.map((item) => {
          return item.image;
        });
        acc.push({
          name,
          categoryId,
          slug,
          price,
          images: productImage,
          Reviews,
          categoryName: Category.name,
          categorySlug: Category.slug,
        });
        return acc;
      }, []),
    };

    return res.status(200).send({
      success: true,
      message: "success",
      data: data,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
