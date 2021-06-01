const express = require('express');
const router = express.Router();
const controller = require("../controller/controller.js")
// const authenticate = require("../authenticate/authenticate.js")
// const authController = require('../controller/auth.js');

router.post("/createEvent", controller.createEvent);

router.post('/createItem', controller.createItem);

router.put('/updateItem/:item_id', controller.updateItem);

router.get("/events/:event_id/items", controller.getAllItemsByEvent);

router.get("/events/:event_id/users", controller.getAllUsersByEvent);

router.get("/events", controller.getAllEvents);

router.post('/createUser', controller.createUser);

router.put('/updateUser/users/:user_id', controller.updateUser);

router.delete('/delete/items/:item_id', controller.deleteItem);

// router.post('/auth/login', authController.login); 

module.exports = router;