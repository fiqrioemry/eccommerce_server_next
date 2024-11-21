const express = require("express");
const rajaongkir = require("../../services/rajaongkir");

const router = express.Router();
router.get("/cities", rajaongkir.GetCities);
router.get("/provinces", rajaongkir.GetProvinces);
router.post("/courier/:courier", rajaongkir.GetCost);

module.exports = router;
