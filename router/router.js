const express = require('express');
const router = express.Router();
const controller = require("../controller/controller.js")

router.post("/events/:event_id, events/", controller.createEvent);

router.post("/items/:item_name, /items/:desc, /items/:item_desc, /items/:item_open, /items/:item_donor, /items/:event_id, /items/:bid_id", controller.createItem);

router.put("/items/:item_name, /items/:desc, /items/:item_desc, /items/:item_open, /items/:item_donor, /items/:event_id, /items/:bid_id", controller.updateItem);

router.get("/events/:event_id/items", controller.getAllItemsByEvent);

router.get("/events/:event_id/users", controller.getAllUsersByEvent);

router.get("/events", controller.getAllEvents);

router.post("/users/:first_name, /users/:last_name, /users/:city, /users/:email", controller.createUser);

router.put("/users/:first_name, /users/:last_name, /users/:city, /users/:email", controller.updateUser);

router.delete("/items/:item_num", controller.deleteItem);

module.exports = router;