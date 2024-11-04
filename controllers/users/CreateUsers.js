const { Users } = require("../../models");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    const { name, email, password, passwordConfirm } = req.body;

    const existEmail = await Users.findOne({ where: { email: email } });
    if (existEmail)
      return res
        .status(400)
        .send({ success: false, message: "Email already in use" });

    if (password !== passwordConfirm)
      return res
        .status(400)
        .send({ success: false, message: "passowrd do not match" });

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({
      name,
      email,
      password: hashPassword,
    });
    return res
      .status(201)
      .send({ message: "Create New Account is Success", data: newUser });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
