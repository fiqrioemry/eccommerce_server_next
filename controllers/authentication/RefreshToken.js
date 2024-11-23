const { Tokens } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    console.log("HALO SEMUA");

    if (!refreshToken) {
      return res.status(401).send({ message: "Anauthorized access" });
    }

    const refreshTokenData = await Tokens.findOne({
      where: { refreshToken },
    });

    if (!refreshTokenData) {
      return res
        .status(401)
        .send({ message: "No refresh token found, you are unauthorized!" });
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ error: "Token has expired" });
        } else {
          return res.status(403).send(err);
        }
      }

      const payload = {
        userId: user.userId,
        userName: user.userName,
        userRole: user.userRole,
        storeId: user.storeId,
        storeName: user.storeName,
      };
      // TODO : this part for testing ------ change setting after done
      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN, {
        expiresIn: "15s",
      });
      // TODO : this part for testing ------ change setting after done
      res.status(200).send({ success: true, data: accessToken });
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
