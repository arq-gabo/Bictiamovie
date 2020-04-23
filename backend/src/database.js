const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/BictiaMovie', {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err));