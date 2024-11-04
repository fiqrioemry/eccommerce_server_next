const { Users, UserProfiles } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findOne({
      where: { id },
      include: [{ model: UserProfiles }],
      attributes: ["id", "email"],
    });

    if (!user) {
      return res.status(404).send({ message: "Unknown Data Users" });
    }

    // Delete the associated profile if it exists
    if (user.UserProfile) {
      await UserProfiles.destroy({ where: { userId: id } });
    }

    // Delete the user
    await Users.destroy({ where: { id } });

    return res.status(200).send({
      message: "User has been deleted",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
