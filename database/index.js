const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/earnings';

const db = mongoose.connect(mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

mongoose.Promise = global.Promise;
