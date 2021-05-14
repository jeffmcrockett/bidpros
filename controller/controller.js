const express = require('express');
const router = express.Router();
const controller = require("../controller/controller");

router.get('/users', controller.getUsers);

let createEvent = (req, res) => {
    console.log("Inside the createEvent function", req.params);
    connection.query(`INSERT INTO events (event_id, event_name, event_host, event_date)
    VALUES(${req.params.event_id},
        ${req.params.event_name},
        ${req.params.event_host},
        ${req.params.event_date})`,
        function (err, results) {
            if (err) {
                console.log(`there is an error: ${err}`);
                res.status(500).send(`internal service error`)
            } else {
                res.json(results)
            }
        });
    res.send("success")
}

let createItem = (req, res) => {
    console.log("Inside the createItem function", req.params);
    connection.query(`INSERT INTO items (item_id, item_name, item_desc, item_open, item_donor, event_id, bid_id)
    VALUES (${req.params.item_id}, 
        ${req.params.item_name}, 
        ${req.params.item_desc},
        ${req.params.item_open},
        ${req.params.item.donor},
        ${req.params.event_id},
        ${req.params.bid_id}
        )`, function (err, results) {
        if (err) {
            console.log(`there is an error: ${err}`);
            res.status(500).send(`internal service error`)
        } else {
            res.json(results)
        }
    });
    res.send("success")
}

let updateItem = (req, res) => {
    console.log("Inside the updateItem function", req.params);
    connection.query(`UPDATE items
    SET (item_id = ${req.params.item_id}, 
        item_name = ${req.params.item_name}, 
        item_desc = ${req.params.item_desc},
        item_open = ${req.params.item_open},
        item_donor = ${req.params.item.donor},
        event_id = ${req.params.event_id},
        bid_id = ${req.params.bid_id}) 
        WHERE item_id = ${req.params.item_id};`,
        function (err, results) {
            if (err) {
                console.log(`there is an error: ${err}`);
                res.status(500).send(`internal service error`)
            } else {
                res.json(results)
            }
        });
    res.send("success")
}

let getAllItems = (req, res) => {
    console.log("Inside the getAllItems function", req.params);
    connection.query(`SELECT * FROM items WHERE event_id = ${req.params.event_id}`, function (err, results) {
        if (err) {
            console.log(`there is an error: ${err}`);
            res.status(500).send(`internal service error`)
        } else {
            res.json(results)
        }
    });
    res.send("success")
}

let getAllUsers = (req, res) => {
    console.log("Inside the getAllUsers function", req.params);
    connection.query(`SELECT * FROM users`, function (err, results) {
        if (err) {
            console.log(`there is an error: ${err}`);
            res.status(500).send(`internal service error`)
        } else {
            res.json(results)
        }
    });
    res.send("success")
}

let getAllEvents = (req, res) => {
    console.log("Inside the getAllEvents function", req.params);
    connection.query(`SELECT * FROM events`, function (err, results) {
        if (err) {
            console.log(`there is an error: ${err}`);
            res.status(500).send(`internal service error`)
        } else {
            res.json(results)
        }
    });
    res.send("success")
}

let createUser = (req, res) => {
    console.log("Inside the createUser function", req.params);
    connection.query(`INSERT INTO users (user_id, first_name, last_name, city, email)
        VALUES (${req.params.user_id}, 
            ${req.params.first_name}, 
            ${req.params.last_name}, 
            ${req.params.city}, 
            ${req.params.email})`,
        function (err, results) {
            if (err) {
                console.log(`there is an error: ${err}`);
                res.status(500).send(`internal service error`)
            } else {
                res.json(results)
            }
        });
    res.send("success")
}

let updateUser = (req, res) => {
    console.log("Inside the updateUser function", req.params);
    connection.query(`UPDATE users
        SET user_id = ${req.params.user_id}, 
        first_name = ${req.params.first_name}, 
        last name = ${req.params.last_name}, 
        city = ${req.params.city}, 
        email = ${req.params.email})
        WHERE user_id = ${req.params.user_id};`,
        function (err, results) {
            if (err) {
                console.log(`there is an error: ${err}`);
                res.status(500).send(`internal service error`)
            } else {
                res.json(results)
            }
        });
    res.send("success")
}

let deleteItem = (req, res) => {
    console.log("Inside the createEvent function", req.params);
    connection.query('INSERT INTO events', function (err, results) {
        if (err) {
            console.log(`there is an error: ${err}`);
            res.status(500).send(`internal service error`)
        } else {
            res.json(results)
        }
    });
    res.send("success")
}

module.exports = router;