const express = require('express');
const router = express.Router();
const controller = require("../controller/controller.js")
const authenticate = require("../authenticate/authenticate.js")
const authController = require('../controller/auth.js');

router.post("/createEvent", authenticate.checkJwt, controller.createEvent);

router.post('/createItem', authenticate.checkJwt, controller.createItem);

router.put('/updateItem/:item_id', authenticate.checkJwt, controller.updateItem);

router.get("/events/:event_id/items", authenticate.checkJwt, controller.getAllItemsByEvent);

router.get("/events/:event_id/users", authenticate.checkJwt, controller.getAllUsersByEvent);

router.get("/events", controller.getAllEvents);

router.post('/createUser', authenticate.checkJwt, controller.createUser);

router.put('/updateUser/users/:user_id', authenticate.checkJwt, controller.updateUser);

router.delete('/delete/items/:item_id', authenticate.checkJwt, controller.deleteItem);

router.post('/auth/login', authController.login); 

module.exports = router;