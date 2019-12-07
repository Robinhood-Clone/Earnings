const mongoose = require('mongoose');
const db = require('./index.js');

const earningSchema = new mongoose.Schema({
  ticker: String,
  companyName: String,
  data: {type:[{
      quarter: Date,
      estimatedPrice: String,
      actualPrice: String
    }]}
},
  {
    timestamps: false,
  }
);

const Earning = mongoose.model('Earning', earningSchema);


module.exports = Earning;