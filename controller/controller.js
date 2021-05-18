const connection = require('../sql/connection');

// ! Incomplete
let createEvent = (req, res) => {
    console.log("Inside the createEvent function", req.params);
    connection.query(`INSERT INTO events (event_id, event_name, event_host, event_date)
    VALUES(${req.body.event_id},
        ${req.body.event_name},
        ${req.body.event_host},
        ${req.body.event_date})`,
        function (err, results) {
            if (err) {
                console.log(`there is an error: ${err}`);
                res.status(500).send(`internal service error`)
            } else {
                res.json(results)
            }
        });
}

// ! Incomplete
let createItem = (req, res) => {
    console.log("Inside the createItem function", req.body);
    connection.query(`INSERT INTO items (item_name, item_desc, item_open, item_donor, event_id, bid_id)
    VALUES ( 
        ${req.body.item_name}, 
        ${req.body.item_desc},
        ${req.body.item_open},
        ${req.body.item.donor},
        ${req.body.event_id},
        ${req.body.bid_id}
        )`, function (err, results) {
        if (err) {
            console.log(`there is an error: ${err}`);
            res.status(500).send(`internal service error`)
        } else {
            res.json(results)
        }
    });
}

// ! Incomplete
let updateItem = (req, res) => {
    console.log("Inside the updateItem function", req.params);
    connection.query(`UPDATE items
    SET item_id = ${req.body.item_id}, 
        item_name = ${req.body.item_name}, 
        item_desc = ${req.body.item_desc},
        item_open = ${req.body.item_open},
        item_donor = ${req.body.item.donor},
        event_id = ${req.body.event_id},
        bid_id = ${req.body.bid_id} 
        WHERE item_id = ${req.body.item_id};`,
        function (err, results) {
            if (err) {
                console.log(`there is an error: ${err}`);
                res.status(500).send(`internal service error`)
            } else {
                res.json(results)
            }
        });
}

// ! Incomplete
let getAllItemsByEvent = (req, res) => {
    console.log("Inside the getAllItems function", req.params);
    connection.query(`SELECT * FROM items WHERE event_id = ${req.body.event_id}`, function (err, results) {
        if (err) {
            console.log(`there is an error: ${err}`);
            res.status(500).send(`internal service error`)
        } else {
            res.json(results)
        }
    });
}

// ! This is the corrected version to model other after
let getAllUsersByEvent = (req, res) => {
    console.log("Inside the getAllUsers function", req.params);
    connection.query(`SELECT * FROM users JOIN usertype ON users.user_id = usertype.user_id
    WHERE usertype.event_id = ${req.body.event_id}`, function (err, results) {
        if (err) {
            console.log(`there is an error`, err);
            res.status(500).send(`internal service error`)
        } else {
            res.json(results.rows)
        }
    });
}

// ! Incomplete
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
}

// ! Incomplete
let createUser = (req, res) => {
    console.log("Inside the createUser function", req.params);
    connection.query(`INSERT INTO users (user_id, first_name, last_name, city, email)
        VALUES (${req.body.user_id}, 
            ${req.body.first_name}, 
            ${req.body.last_name}, 
            ${req.body.city}, 
            ${req.body.email})`,
        function (err, results) {
            if (err) {
                console.log(`there is an error: ${err}`);
                res.status(500).send(`internal service error`)
            } else {
                res.json(results)
            }
        });
}

// ! Incomplete
let updateUser = (req, res) => {
    console.log("Inside the updateUser function", req.params);
    connection.query(`UPDATE users
        SET user_id = ${req.body.user_id}, 
        first_name = ${req.body.first_name}, 
        last name = ${req.body.last_name}, 
        city = ${req.body.city}, 
        email = ${req.body.email})
        WHERE user_id = ${req.body.user_id};`,
        function (err, results) {
            if (err) {
                console.log(`there is an error: ${err}`);
                res.status(500).send(`internal service error`)
            } else {
                res.json(results)
            }
        });
}

// ! Incomplete
let deleteItem = (req, res) => {
    console.log("Inside the createEvent function", req.params);
    connection.query(`DELETE FROM events where event_id = ${event_id}`, function (err, results) {
        if (err) {
            console.log(`there is an error: ${err}`);
            res.status(500).send(`internal service error`)
        } else {
            res.json(results)
        }
    });
}

module.exports = 
    {createEvent,
    createItem,
    updateItem,
    getAllItemsByEvent,
    getAllUsersByEvent,
    getAllEvents,
    createUser,
    updateUser,
    deleteItem
};