module.exports = async (req, res, next) => {
  try {
    if (req.user.userRole !== "Admin")
      return res.status(403).send({ message: "Access is Prohibited" });
    next();
  } catch (error) {
    console.log(error.message);
  }
};
