const callApi = require("./instance");

module.exports = async (req, res) => {
  try {
    const response = await callApi.get(`/province`);
    console.log(response);
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
