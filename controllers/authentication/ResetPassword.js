const bcrypt = require("bcrypt");
const { Users, ResetTokens } = require("../../models");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  try {
    const resetToken = req.params.resetToken;
    // check reset token
    const user = await ResetTokens.findOne({
      where: { resetToken, expiresAt: { [Op.gte]: new Date() } },
    });
    if (!user)
      return res.status(400).send({
        message: "Reset Password Token is invalid or has been expired",
      });

    const { newPassword, newPasswordConfirm } = req.body;
    // check password match
    if (newPassword !== newPasswordConfirm) {
      return res
        .status(400)
        .send({ message: "Password confirmation did not match" });
    }
    // create new password encryption
    const newHashPassword = await bcrypt.hash(newPassword, 10);

    // update new password to database table and destroy reset token
    (await Users.update(
      { password: newHashPassword },
      { where: { id: user.userId } }
    )) && ResetTokens.destroy({ where: { userId: user.userId } });

    res.status(200).send({
      success: true,
      message: `Your password has been succesfully updated`,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
