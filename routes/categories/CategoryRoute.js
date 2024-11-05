const express = require("express");
const categoryController = require("../../controllers/categories");
const { isAdmin, isAuthenticate, FileUpload } = require("../../middleware");
const router = express.Router();

router.post(
  "/",
  isAuthenticate,
  isAdmin,
  FileUpload.single("image"),
  categoryController.CreateNewCategory
);

router.get("/", categoryController.GetAllCategories);

// router.put(
//   "/:id",
//   middleware.isAuthenticate,
//   middleware.isAdmin,
//   middleware.FileUpload.single("image"),
//   categoryController.UpdateCategory
// );
// router.delete(
//   "/:id",
//   middleware.isAuthenticate,
//   middleware.isAdmin,
//   categoryController.DeleteCategory
// );

module.exports = router;
