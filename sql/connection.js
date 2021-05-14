const pg = require('pg');

let connection = pg.createConnection({
  host: 'ec2-54-87-112-29.compute-1.amazonaws.com',
  user: 'mgujwfkuppyvbo',
  password: 'ab17a2b5b15b9e01fd17ea2e55062e19981f79f76152e482722750a0692d142c',
  database: 'd701ft5q0sf4mu'
});

connection.connect(function(err) {
  if(err){
    console.log('error connecting : ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId)
});

module.exports = connection;