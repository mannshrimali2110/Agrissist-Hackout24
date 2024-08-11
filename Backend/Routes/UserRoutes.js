const express = require('express');
const UserController = require('../Controllers/UserController');
const router = express.Router();

router.post("/addUser", UserController.addUser);
router.get("/getUser", UserController.getUserByEmail);
router.get("/authenticate", UserController.authenticateUser);

module.exports = router;