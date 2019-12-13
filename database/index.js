const mongoose = require('mongoose');
const mongoUri = 'mongodb://database:27017/earnings';

const db = mongoose.connect(mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

mongoose.Promise = global.Promise;
