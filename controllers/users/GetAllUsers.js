const { Users, UserProfiles, UserRoles } = require("../../models");

module.exports = async (req, res) => {
  try {
    const users = await Users.findAll({
      include: [
        { model: UserRoles, attributes: ["name"] },
        { model: UserProfiles, attributes: ["name", "address"] },
      ],
    });

    return res
      .status(200)
      .send({ success: true, message: "success", data: users });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
