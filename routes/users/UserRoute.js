const express = require("express");
const usersController = require("../../controllers/users");
const isAuthenticate = require("../../middleware/isAuthenticate");
const isAdmin = require("../../middleware/isAdmin");
const router = express.Router();

router.get("/", isAuthenticate, isAdmin, usersController.GetAllUsers); // this for admin access
router.get("/profile", isAuthenticate, usersController.GetUserProfiles); //this for customer access
router.delete(
  "/delete/:id",
  isAuthenticate,
  isAdmin,
  usersController.DeleteUsers
);
router.put(
  "/profile/update-password",
  isAuthenticate,
  usersController.UpdateUserPassword
);
router.put(
  "/profile/update-profile",
  isAuthenticate,
  usersController.UpdateUserProfiles
);

module.exports = router;
