const { client } = require('pg');

const client = new Client({
    user: 'mgujwfkuppyvbo',
    host: 'ec2-54-87-112-29.compute-1.amazonaws.com',
    database: 'd701ft5q0sf4mu',
    password: 'ab17a2b5b15b9e01fd17ea2e55062e19981f79f76152e482722750a0692d142c',
    port: 5432,
    ssl: {rejectUnauthorized:false}
});

client.connect(function(err) {
  if(err){
    console.log('error connecting : ' + err.stack);
    return;
  };
  console.log('connected as id ', client)
});

module.exports = client;
