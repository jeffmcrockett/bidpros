const connection = require('../sql/connection');

const getUsers = (req, res) => {
    console.log(`inside the getUsers list route`);
    // select all from users to show a list and limit to 100 in case database is larger
    connection.query('SELECT * FROM users LIMIT 100', function (err, results) {
        if (err) {
            console.log(`there is an error: ${err}`);
            res.status(500).send(`internal service error`)
        } else {
            res.json(results)
        }
    });
};

module.exports = {};