const { Users } = require("../../models");
const GenerateToken = require("../../utils/ResetToken");
const SendEmail = require("../../utils/SendEmail");
const GenerateTemplate = require("../../utils/EmailTemplate");

module.exports = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await Users.findOne({
      where: { email },
    });

    if (!user)
      return res.status(401).send({ message: `Email is not registered` });

    // Get ResetPassword Token
    const resetToken = GenerateToken(user);

    // Generate Link for password reset
    const passwordResetURL = `${process.env.BASE_URL}/reset-password/${resetToken}`;

    // generate message for Email content
    const message = GenerateTemplate({ user, passwordResetURL });

    // send reset token to email
    await SendEmail({
      email: user.email,
      subject: `password recovery`,
      message,
    });

    res.status(200).send({
      success: true,
      message: `Password Recovery Link has been sent to ${user.email}`,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
