const connection = require('../sql/connection');

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

let createItem = (req, res) => {
    console.log("Inside the createItem function", req.body);
    connection.query(`INSERT INTO items (item_name, item_desc, item_open, item_donor, event_id, bid_id)
    VALUES ( 
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
}

let updateItem = (req, res) => {
    console.log("Inside the updateItem function", req.params);
    connection.query(`UPDATE items
    SET item_id = ${req.params.item_id}, 
        item_name = ${req.params.item_name}, 
        item_desc = ${req.params.item_desc},
        item_open = ${req.params.item_open},
        item_donor = ${req.params.item.donor},
        event_id = ${req.params.event_id},
        bid_id = ${req.params.bid_id} 
        WHERE item_id = ${req.params.item_id};`,
        function (err, results) {
            if (err) {
                console.log(`there is an error: ${err}`);
                res.status(500).send(`internal service error`)
            } else {
                res.json(results)
            }
        });
}

let getAllItemsByEvent = (req, res) => {
    console.log("Inside the getAllItems function", req.params);
    connection.query(`SELECT * FROM items WHERE event_id = ${req.params.event_id}`, function (err, results) {
        if (err) {
            console.log(`there is an error: ${err}`);
            res.status(500).send(`internal service error`)
        } else {
            res.json(results)
        }
    });
}

let getAllUsersByEvent = (req, res) => {
    console.log("Inside the getAllUsers function", req.params);
    connection.query(`SELECT * FROM users JOIN usertype ON users.user_id = usertype.user_id
    WHERE usertype.event_id = ${req.params.event_id}`, function (err, results) {
        if (err) {
            console.log(`there is an error`, err);
            res.status(500).send(`internal service error`)
        } else {
            res.json(results.rows)
        }
    });
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