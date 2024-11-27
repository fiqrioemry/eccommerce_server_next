const { Products, Images, Categories, Stores } = require("../../models");

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
      storeName: store.storeName,
      storeSlug: store.slug,
      description: store.description,
      storeImage: store.image,
      storeCity: store.city,
      products: store.Products?.reduce((acc, curr) => {
        const { name, slug, price, Images, Category } = curr;
        const productImage = Images[0].image;
        acc.push({
          name,
          slug,
          price,
          images: productImage,
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
