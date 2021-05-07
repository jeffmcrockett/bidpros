const express = require('express')
const app = express()
const port = process.env.PORT || 4001

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Welcome to my bidding application!'))

app.listen(port, () => {
  console.log('App is listening on:', port)
})