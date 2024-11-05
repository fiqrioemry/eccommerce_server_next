const { Users, UserRoles, UserProfiles } = require("../../models");

module.exports = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await Users.findOne({
      where: { id: userId },
      include: [
        { model: UserRoles, attributes: ["name"] },
        { model: UserProfiles, attributes: ["name", "address"] },
      ],
    });
    if (!user) {
      // Jika pengguna tidak ditemukan, kembalikan respons 404
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }

    return res
      .status(200)
      .send({ success: true, message: "success", data: user });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
