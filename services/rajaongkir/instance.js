const axios = require("axios");
require("dotenv").config({
  path: "../../.env",
});

const API_KEY = process.env.RAJAONGKIR_API_KEY;

const callApi = axios.create({
  baseURL: "https://api.rajaongkir.com/starter",
  headers: { key: API_KEY },
});

module.exports = callApi;
