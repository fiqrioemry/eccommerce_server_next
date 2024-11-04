const express = require("express");
const authController = require("../../controllers/authentication");
const router = express.Router();

router.post("/login", authController.Login); // this for new user (customer) access

module.exports = router;
