const express = require("express");
const productsController = require("../../controllers/products");
const { isAuthenticate, FileUpload } = require("../../middleware");
const router = express.Router();

router.post(
  "/create",
  isAuthenticate,
  FileUpload.array("images"),
  productsController.CreateNewProduct
); // this for admin access

router.put(
  "/update/:id",
  isAuthenticate,
  FileUpload.array("images"),
  productsController.UpdateProduct
); //
module.exports = router;
