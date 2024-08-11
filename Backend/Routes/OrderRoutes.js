const express = require('express');
const OrderController = require('../Controllers/OrderController');
const router = express.Router();

router.post("/addOrder", OrderController.addOrder);
router.get("/getOrderByID", OrderController.getOrderByID);

module.exports = router;