const express = require("express");
const router = express.Router();
const productController = require("./productController");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct);
router.post("/purchase/:id", productController.purchaseProduct);

module.exports = router;
