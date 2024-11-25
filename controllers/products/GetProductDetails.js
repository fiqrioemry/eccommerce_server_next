const {
  Products,
  Images,
  Reviews,
  Categories,
  OrderDetails,
  Stores,
  Users,
  UserProfiles,
} = require("../../models");

module.exports = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Products.findOne({
      where: { slug },
      include: [
        { model: OrderDetails },
        { model: Images, attributes: ["image"] },
        {
          model: Reviews,
          attributes: ["userId", "rating", "comment", "createdAt"],
          include: [
            {
              model: Users,
              attributes: ["email"],
              include: [{ model: UserProfiles, attributes: ["name", "city"] }],
            },
          ],
        },
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
      category: product.Category?.slug,
      description: product.description,
      price: product.price,
      stock: product.stock,
      images: product.Images?.map((img) => img.image) || [],
      sold:
        product.OrderDetails?.reduce(
          (total, detail) => total + detail.quantity,
          0
        ) || 0,
      reviews: product.Reviews?.reduce((acc, curr) => {
        const { userId, rating, comment, createdAt } = curr;
        const email = curr.User.email;
        const customerName = curr.User.UserProfile.name;
        const customerCity = curr.User.UserProfile.city;
        acc.push({
          userId,
          email,
          customerName,
          customerCity,
          rating,
          comment,
          createdAt,
        });
        return acc;
      }, []),
      storeId: product.storeId,
      storeName: product.Store?.storeName,
      storeSlug: product.Store?.slug,
      storeCity: product.Store?.city || [],
      storeImage: product.Store?.image || [],
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
