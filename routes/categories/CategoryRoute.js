const express = require("express");
const categoryController = require("../../controllers/categories");
const { isAdmin, isAuthenticate, FileUpload } = require("../../middleware");
const router = express.Router();

router.get("/", categoryController.GetAllCategories);

router.post(
  "/create",
  isAuthenticate,
  isAdmin,
  FileUpload.single("image"),
  categoryController.CreateNewCategory
);

router.put(
  "/update/:id",
  isAuthenticate,
  isAdmin,
  FileUpload.single("image"),
  categoryController.UpdateCategory
);
router.delete(
  "/delete/:id",
  isAuthenticate,
  isAdmin,
  categoryController.DeleteCategory
);

module.exports = router;
