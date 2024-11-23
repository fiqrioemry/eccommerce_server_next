const { Tokens } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return res.status(401).send({ message: "Session Expired, Please Login" });
    }

    const refreshTokenData = await Tokens.findOne({
      where: { refreshToken },
    });

    if (!refreshTokenData) {
      return res.status(401).send({ message: "Unauthorized Access !!!" });
    }

    const user = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);

    const payload = {
      userId: user.userId,
      userName: user.userName,
      userRole: user.userRole,
      storeId: user.storeId,
      storeName: user.storeName,
    };

    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN, {
      expiresIn: "15m",
    });
    res.status(200).send({ success: true, data: accessToken });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
