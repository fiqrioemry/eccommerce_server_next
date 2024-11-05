const bcrypt = require("bcrypt");
const { Users, UserProfiles } = require("../../models");

module.exports = async (req, res) => {
  try {
    // Define variables
    const { name, email, password, passwordConfirm } = req.body;

    // Check if required fields are provided
    if (!name || !email || !password || !passwordConfirm) {
      return res.status(400).send({ message: "All fields are required" });
    }

    // Check if passwords match
    if (password !== passwordConfirm) {
      return res.status(400).send({ message: "Passwords do not match." });
    }

    // Check if email already exists
    const existingUser = await Users.findOne({
      where: { email: email },
      attributes: ["id", "email", "password"],
    });
    if (existingUser) {
      return res.status(409).send({ message: "Email is already registered." }); // 409 Conflict
    }

    // Password encryption
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await Users.create({
      email: email,
      password: hashedPassword,
    });

    // Create user profile
    await UserProfiles.create({
      userId: user.id,
      name: name,
    });

    return res
      .status(201)
      .send({ message: "Registration successful, please login." }); // 201 Created
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" }); // 500 Internal Server Error
  }
};
