const express = require('express');
const router = express.Router();
const controller = require("../controller/controller.js")
// const authenticate = require("../authenticate/authenticate.js")
// const authController = require('../controller/auth.js');

router.post("/events", controller.createEvent);

router.post('/items', controller.createItem);

router.put('/updateItem/:item_id', controller.updateItem);

router.get("/items", controller.getAllItemsByEvent);

router.get("/users", controller.getAllUsersByEvent);

router.get("/events", controller.getAllEvents);

router.post('/users', controller.createUser);

router.put('/users/:user_id', controller.updateUser);

router.delete('/items/:item_id', controller.deleteItem);

// router.post('/auth/login', authController.login); 

module.exports = router;