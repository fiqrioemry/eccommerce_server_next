const { Users } = require("../../models");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    const { oldPassword, newPassword, confirmNewPassword } = req.body;

    if (!(oldPassword && newPassword && confirmNewPassword)) {
      return res.status(400).send({ message: "All fields are required." });
    }
    const user = await Users.findByPk(req.user.userId);
    const match = await bcrypt.compare(oldPassword, user.password);

    if (newPassword !== confirmNewPassword)
      return res.status(400).send({ message: "Password do not match" });

    if (!match)
      return res.status(400).send({ message: "Old password is wrong" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await Users.update(
      { password: hashedPassword },
      {
        where: { id: req.user.userId },
      }
    );
    return res.status(200).send({
      message: "Password is changed",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
