const express = require('express');
const router = express.Router();
const controller = require("../controller/controller");

router.get('/users', controller.getUsers);

module.exports = router;