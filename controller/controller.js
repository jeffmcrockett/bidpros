const { default: axios } = require('axios');
const { post } = require('../router/router.js');
const connection = require('../sql/connection.js');

// createEvent complete, NOT TESTED
let createEvent = (req, res) => {
    db.events.insertOne(req);
    
    
    // console.log("Inside the createEvent function", req.params);
    // let sql = `INSERT INTO events (event_name, event_host, event_date)
    // VALUES
    // event_name = ?,
    // event_host = ?,
    // event_date = ?`
    // let body = [];

    // body.push(req.body.event_name)
    // body.push(req.body.event_host)
    // body.push(req.body.event_date)

    // connection.query(sql, body, (err) => {
    //     if (err) {
    //         console.log(`there is an error: ${err}`);
    //         res.status(500).send(`internal service error (createEvent)`)
    //     } else {
    //         res.json(results)
    //     }
    // });
}

// createItem complete, NOT TESTED
let createItem = (req, res) => {


    // console.log("Inside the createItem function", req.body);
    
    // let sql = `INSERT INTO items (item_name, item_desc, item_open, item_donor, event_id, bid_id)
    // VALUES
    // item_name = ?,
    // item_desc = ?,
    // item_open = ?,
    // item_donor = ?,
    // event_id = ?,
    // bid_id = ?`
    // let body = [];

    // body.push(req.body.item_name)
    // body.push(req.body.item_desc)
    // body.push(req.body.item_open)
    // body.push(req.body.item.donor)
    // body.push(req.body.event_id)
    // body.push(req.body.bid_id)
    
    // connection.query(sql, body, (err) => {
    //     if (err) {
    //         console.log(`there is an error: ${err}`);
    //         res.status(500).send(`internal service error (createItem)`)
    //     } else {
    //         res.json(results)
    //     }
    // });
}

// updateItem complete, NOT TESTED
let updateItem = (req, res) => {


    // console.log("Inside the updateItem function", req.params);

    // let sql = `UPDATE items SET 
    // item_id = ?, 
    // item_name = ?, 
    // item_desc = ?,
    // item_open = ?,
    // item_donor = ?,
    // event_id = ?,
    // bid_id = ? 
    // WHERE 
    // item_id = ${req.params.item_id}`;
    // let body = [];

    // body.push(req.body.item_id)
    // body.push(req.body.item_name)
    // body.push(req.body.item_desc)
    // body.push(req.body.item_open)
    // body.push(req.body.item.donor)
    // body.push(req.body.event_id)
    // body.push(req.body.bid_id)

    // connection.query(sql, body, (err) => {
    //     if (err) {
    //         console.log(`there is an error: ${err} `);
    //         res.status(500).send(`internal service error (update item)`)
    //     } else {
    //         res.json(results)
    //     }
    // });
}

// getAllItemsByEvent complete, NOT TESTED
let getAllItemsByEvent = async (req, res) => {
    try { axios.get()
        .then((response) => {
            const data = response.data;
            this.setState({ items: data });
            console.log("Data has been received");
        })
    }
    catch (error) {
        
    }
    post.save()


    // console.log("Inside the getAllItems function", req.params);
    // let sql = `SELECT * FROM items WHERE event_id = ?`;
    // let body = [];

    // body.push(req.params.event_id)

    // connection.query(sql, body, (err) => {
    //     if (err) {
    //         console.log(`there is an error: ${err}`);
    //         res.status(500).send(`internal service error (getAllItemsByEvent)`)
    //     } else {
    //         res.json(results)
    //     }
    // });
}

// getAllUsersByEvent complete, NOT TESTED
let getAllUsersByEvent = (req, res) => {


    // console.log("Inside the getAllUsers function", req.params);

    // let sql = `SELECT * FROM users JOIN usertype ON users.user_id = usertype.user_id
    // WHERE usertype.event_id = ?`;
    // let body = [];

    // body.push(req.params.usertype.event_id)

    // connection.query(sql, body, (err) => {
    //     if (err) {
    //         console.log(`there is an error`, err);
    //         res.status(500).send(`internal service error`)
    //     } else {
    //         res.json(results.rows)
    //     }
    // });
}

// getAllEvents complete, NOT TESTED
let getAllEvents = async (req, res) => {
    console.log("Inside the getAllEvents function", req.params);
    try {
        
    } catch (error) {
        
    }
    post.save()
}

// createUser complete, NOT TESTED
let createUser = (req, res) => {


    // console.log("Inside the createUser function", req.params);

    // let sql = `INSERT INTO users (first_name, last_name, city, email)
    // VALUES 
    // first_name = ?,
    // last_name = ?,
    // city = ?,
    // email = ?`;
    // let body = [];

    // body.push(req.body.first_name)
    // body.push(req.body.last_name)
    // body.push(req.body.city)
    // body.push(req.body.email)

    // connection.query(sql, body, (err) => {
    //     if (err) {
    //         console.log(`there is an error: ${err}`);
    //         res.status(500).send(`internal service error (createUser)`)
    //     } else {
    //         res.json(results)
    //     }
    // });
}

// updateUser complete, NOT TESTED
let updateUser = (req, res) => {


    // console.log("Inside the updateUser function", req.params);

    // let sql = `UPDATE users SET 
    // user_id = ?, 
    // first_name = ?, 
    // last name = ?, 
    // city = ?, 
    // email = ?
    // WHERE user_id = ${req.body.user_id}`;
    // let body = [];

    // body.push(req.body.user_id)
    // body.push(req.body.first_name)
    // body.push(req.body.last_name)
    // body.push(req.body.city)
    // body.push(req.body.email)

    // connection.query(sql, body, (err) => {
    //     if (err) {
    //         console.log(`there is an error: ${err}`);
    //         res.status(500).send(`internal service error (updateUser)`)
    //     } else {
    //         res.json(results)
    //     }
    // });
}

// deleteItem complete, NOT TESTED
let deleteItem = (req, res) => {


    // console.log("Inside the createEvent function", req.params);

    // let sql = `DELETE FROM items where item_id = ?`
    // let body = [];

    // body.push(req.body.item_id)

    // connection.query(sql, body, (err) => {
    //     if (err) {
    //         console.log(`there is an error: ${err}`);
    //         res.status(500).send(`internal service error (deleteItem)`)
    //     } else {
    //         res.json(results)
    //     }
    // });
}

module.exports = {
    createEvent,
    createItem,
    updateItem,
    getAllItemsByEvent,
    getAllUsersByEvent,
    getAllEvents,
    createUser,
    updateUser,
    deleteItem
};






// router.get('/', auth, async (req, res) => {
//     try {
//        const posts = await Post.find().sort({ date: -1})
//        res.json(posts)
//     } catch (error) {
//         console.error(err.message)
//         res.status(500).send('Server Error')
        
//     }
// })

// const express = require('express')
// const router =express.Router()
// const { check, validationResult} = require('express-validator')
