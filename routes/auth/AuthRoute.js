const express = require("express");
const authController = require("../../controllers/authentication");
const router = express.Router();

router.post("/login", authController.Login);
router.get("/logout", authController.Logout);
router.post("/register", authController.Register);
router.get("/refresh", authController.RefreshToken);
router.post("/reset-password", authController.ForgotPassword);
router.put("/reset-password/:resetToken", authController.ResetPassword);

module.exports = router;
