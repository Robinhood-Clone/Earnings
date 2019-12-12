const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Earnings = require('../database/Earning.js');
const app = express();
const port = 4200;
const mongoUrl = 'mongodb://database:27017/earnings';

app.use(cors());
app.use('/', express.static('public'));
app.use('/stocks/:ticker', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Hello, I am listening on port ${port}`);
  mongoose.connect(mongoUrl, {server: {reconnectTries: Number.MAX_VALUE}});
});

app.use('/stocks/:ticker', (req, res, next) => {
  Earnings.find({ ticker: req.params.ticker })
    .exec(
      (err, data) => {
        console.log('server data:', data);
        res.status(200).send(data);
      });
});

app.get('/api/earnings', (req, res) => {

  Earnings.find({ ticker: req.query.ticker }).exec(
    (err, data) => {
      console.log('server data:', data);
      res.status(200).send(data);
    });

});

