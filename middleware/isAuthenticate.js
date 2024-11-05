const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  try {
    if (!authHeader || !authHeader.startsWith("Bearer" + " "))
      return res
        .status(401)
        .send({ message: "Sessions Expired, Please Login to your Account" });

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ error: "Token has expired" });
        } else {
          return res.sendStatus(403);
        }
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.log(error.message);
  }
};
