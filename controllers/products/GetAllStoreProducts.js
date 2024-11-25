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
          include: [
            { model: Images },
            { model: OrderDetails },
            { model: Reviews },
            { model: Categories },
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
      price: product.price,
      stock: product.stock,
      images: product.Images?.map((img) => img.image) || [],
      sold:
        product.OrderDetails?.reduce(
          (total, detail) => total + detail.quantity,
          0
        ) || 0,
      reviews: product.Reviews || [],
      storeId: product.storeId,
      storeName: product.Store?.storeName,
      slugName: product.Store?.slug,
      storeCity: product.Store?.city || null,
      storeImage: product.Store?.image || null,
    };

    return res.status(200).send({
      success: true,
      message: "success",
      data: product,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
