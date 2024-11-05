module.exports = async (req, res) => {
  delete req.headers.authorization;

  res.clearCookie("refreshToken");

  return res.status(200).send({
    message: "Logout is Success",
    success: true,
  });
};
