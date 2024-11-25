const { Users, UserRoles, UserProfiles } = require("../../models");

module.exports = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await Users.findOne({
      where: { id: userId },
      attributes: ["email"],
      include: [
        { model: UserRoles, attributes: ["name"] },
        {
          model: UserRoles,
          attributes: ["id", "name"],
        },
        { model: UserProfiles, attributes: ["name", "address"] },
      ],
    });
    if (!user) {
      // Jika pengguna tidak ditemukan, kembalikan respons 404
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }

    const userEmail = user.email;
    const userRole = user.UserRole?.name;
    const storeId = user.Store?.id;
    const storeName = user.Store?.storeName;
    const userName = user.UserProfile?.name;

    return res.status(200).send({
      success: true,
      message: "success",
      user: {
        userId,
        userEmail,
        userRole,
        storeId,
        storeName,
        userName,
      },
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
