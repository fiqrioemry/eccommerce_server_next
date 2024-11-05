const crypto = require("crypto");
const { ResetTokens } = require("../models");

module.exports = (user) => {
  const userId = user.id;
  const email = user.email;
  const expiresAt = Date.now() + 10 * 60 * 1000; // 10 min
  const resetToken = crypto.randomBytes(20).toString("hex"); // Generating Unique Token

  ResetTokens.create({ userId, resetToken, expiresAt }, { where: { email } });

  return resetToken;
};
