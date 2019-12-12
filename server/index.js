const express = require('express');
const app = express();
const port = 4200;
const bodyParser = require('body-parser');
const Earnings = require('../database/Earning.js');
const cors = require('cors');

app.use(cors());
app.use('/', express.static('public'));
app.use('/stocks/:ticker', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Hello, I am listening on port ${port}`);
});

app.use('/stocks/:ticker', (req, res, next) => {
  console.log(req.params)
  Earnings.find({ ticker: req.params.ticker })
    .exec(
      (err, data) => {
        res.status(200).send(data);
      });
});

app.get('/api/earnings', (req, res) => {

  Earnings.find({ ticker: req.query.ticker }).exec(
    (err, data) => {
      res.status(200).send(data);
    });

});

