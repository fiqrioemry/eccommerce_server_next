const express = require("express");
const usersController = require("../../controllers/users");
const router = express.Router();

router.get("/:id", usersController.GetUserProfiles);
router.get("/", usersController.GetAllUsers);
router.post("/", usersController.CreateUsers);

module.exports = router;
