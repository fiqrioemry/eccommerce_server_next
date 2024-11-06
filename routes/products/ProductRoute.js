const express = require("express");
const productsController = require("../../controllers/products");
const { isAuthenticate, FileUpload } = require("../../middleware");
const router = express.Router();

router.get("/", productsController.GetAllProducts);
router.get("/:id", productsController.GetProductDetails);
router.get("/category/:slug", productsController.GetProductByCategory);

router.delete("/delete", isAuthenticate, productsController.DeleteProducts);
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

module.exports = router;
