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
    const product = await Products.findOne({
      where: { slug },
      include: [
        { model: Images },
        { model: OrderDetails },
        { model: Reviews },
        { model: Categories },
        { model: Stores },
      ],
    });

    if (!product)
      return res.status(400).send({
        success: false,
        message: "Product not found",
      });

    const data = {
      id: product.id,
      title: product.name,
      slug: product.slug,
      category: product.Category?.name || null,
      categorySlug: product.Category?.slug || null,
      description: product.description,
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
      data: data,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
