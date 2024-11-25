const CreateNewProduct = require("./CreateNewProduct");
const UpdateProduct = require("./UpdateProduct");
const GetAllProducts = require("./GetAllProducts");
const GetProductDetails = require("./GetProductDetails");
const GetAllStoreProducts = require("./GetAllStoreProducts");
const GetProductByCategory = require("./GetProductByCategory");
const DeleteProducts = require("./DeleteProducts");

module.exports = {
  CreateNewProduct,
  UpdateProduct,
  DeleteProducts,
  GetProductByCategory,
  GetProductDetails,
  GetAllProducts,
  GetAllStoreProducts,
};
