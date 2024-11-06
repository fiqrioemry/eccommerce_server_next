require("dotenv").config();
const {
  Users,
  UserRoles,
  Stores,
  UserProfiles,
  Tokens,
} = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({
      where: { email },
      include: [
        {
          model: UserProfiles,
          attributes: ["name", "address"],
        },
        {
          model: UserRoles,
          attributes: ["id", "name"],
        },
        {
          model: Stores,
          attributes: ["id", "storeName", "city"],
        },
      ],
    });

    // Check if email exists
    if (!user) {
      return res.status(404).json({ message: "Email does not exist" });
    }

    // Check if password matches
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const userId = user.id;
    const userEmail = user.email;
    const userRole = user.UserRole?.name;
    const storeId = user.Store?.id;
    const storeName = user.Store?.storeName;
    const userName = user.UserProfile?.name;

    const accessToken = jwt.sign(
      { userId, userName, userEmail, userRole, storeId, storeName },
      process.env.ACCESS_TOKEN,
      { expiresIn: "30d" }
    );

    const refreshToken = jwt.sign(
      { userId, userName, userEmail, userRole, storeId, storeName },
      process.env.REFRESH_TOKEN,
      { expiresIn: "30d" }
    );

    const refreshTokenData = await Tokens.findOne({
      where: { userId: user.id },
    });

    if (refreshTokenData) {
      await refreshTokenData.update({ refreshToken }); // Hanya refreshToken yang diperbarui
    } else {
      await Tokens.create({ userId: user.id, refreshToken });
    }

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Pastikan untuk menggunakan secure di produksi
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 hari
    });

    return res.status(200).send({
      message: "Login successful",
      data: {
        accessToken,
        user: {
          userId,
          userName,
          userEmail,
          userRole,
          storeId,
          storeName,
        },
      },
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
