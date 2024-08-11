const express = require('express');
const ProductController = require('../Controllers/ProductController');
const router = express.Router();

router.post("/addProduct", ProductController.addProduct);
router.get("/getProductByID", ProductController.getProductByID);

module.exports = router;