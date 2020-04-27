const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
    .then(db => console.log('MongoDB connection succeeded'))
    .catch(err => console.log(err));

mongoose.set('useCreateIndex', true);


/*
//Establecemos coneecion con la base de datos
mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { 
        console.log('MongoDB connection succeeded');
    } else {
        console.log('Error in MongoDB connection: ' + JSON.stringify(err, undefined, 2));
    }
});
*/


require('../models/userModels');