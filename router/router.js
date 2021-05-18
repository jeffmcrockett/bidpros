const express = require('express');
const router = express.Router();
const controller = require("../controller/controller.js")

router.post("/events/:event_id, events/", controller.createEvent);

router.post("/items", controller.createItem);

router.put("/items", controller.updateItem);

router.get("/events/:event_id/items", controller.getAllItemsByEvent);

router.get("/events/:event_id/users", controller.getAllUsersByEvent);

router.get("/events", controller.getAllEvents);

router.post("/users", controller.createUser);

router.put("/users", controller.updateUser);

router.delete("/items", controller.deleteItem);

module.exports = router;