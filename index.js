const express = require('express');
const app = express();
// const { logger } = require('./authenticate/authenticate.js');
const router = require('./router/router.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.use(logger);  
app.use(router);

app.use(require('./router/router'));

const port = process.env.PORT || 4001;

app.get('/', (req, res) => res.send('default route'));

app.listen(port, () => {
  console.log('app is listening on:', port)
});