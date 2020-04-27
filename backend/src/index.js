//requires files
require('./config/config'); //Gab - Requerimos el archivo de configuracion
require('../src/models/db'); //Gab - Requerimos los modelos
require('./config/passportConfig');

//requires pakages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const userRoutes = require('./routes/userRoutes');

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors()); //para comunicarse diferentes servidores
app.use(passport.initialize());
app.use('/api', userRoutes);

//error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
});

//start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
