const express = require('express');
const app = express();
const port = 4200;
const bodyParser = require('body-parser');
const Earnings = require('../database/Earning.js');
const cors = require('cors');

app.use(cors());
app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Hello, I am listening on port ${port}`);
})

app.get('/earnings', (req, res) => {

  Earnings.find({ ticker: req.query.ticker }).exec(
    (err, data) => {
      console.log(data);
      res.status(200).send(data);
    })

})

