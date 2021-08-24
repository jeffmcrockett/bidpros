const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const path = require('path');
const db = require('./config/db');
const collection = "_______"
// const { logger } = require('./authenticate/authenticate.js');
const router = require('./router/router.js');

app.use(bodyParser.json());
// app.use(logger);  
app.use(router);

app.use(require('./router/router'));

const port = process.env.PORT || 4001;

app.get('/', (req, res) => res.send('default route'));

app.listen(port, () => {
  console.log('app is listening on:', port)
});