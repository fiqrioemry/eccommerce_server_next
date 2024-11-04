const { Users, UserRoles, UserProfiles } = require("../../models");

module.exports = async (req, res) => {
  try {
    const id = req.user.userId;
    const { name, address } = req.body;
    const userProfiles = await UserProfiles.findOne({
      where: { id: req.user.userId },
    });

    if (userProfiles) {
      if (name !== UserProfiles.name) {
        UserProfiles.name == name;
        await UserProfiles.save();
        return res.status(200).send({ message: "Your name is updated" });
      } else if (address !== UserProfiles.address) {
        UserProfiles.address == address;
        await UserProfiles.save();
        return res.status(200).send({ message: "Your Address is updated" });
      } else {
        return res.status(200).send({ message: "There is no data changed" });
      }
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
