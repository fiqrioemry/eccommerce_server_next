const callApi = require("./instance");

module.exports = async (req, res) => {
  const { origin, destination, weight } = req.body;
  const { courier } = req.params;

  try {
    const response = await callApi.post(`/cost`, {
      origin,
      destination,
      weight,
      courier,
    });

    return res.status(200).send({
      message: "success",
      data: response.data.rajaongkir.results,
    });
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
};
