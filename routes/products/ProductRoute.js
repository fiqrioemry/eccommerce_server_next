const express = require("express");
const productsController = require("../../controllers/products");
const { isAuthenticate, FileUpload } = require("../../middleware");
const router = express.Router();

router.get("/", productsController.GetAllProducts);

router.get("/:id", productsController.GetProductDetails);

router.post(
  "/create",
  isAuthenticate,
  FileUpload.array("images"),
  productsController.CreateNewProduct
);

router.put(
  "/update/:id",
  isAuthenticate,
  FileUpload.array("images"),
  productsController.UpdateProduct
);

router.get("/delete/:[id]", isAuthenticate, productsController.DeleteProducts);
module.exports = router;
