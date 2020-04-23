const express = require('express');
const app = express();
const cors = require('cors');

require('./database');

app.use(cors()); //para comunicarse diferentes servidores
app.use(express.json()); //recibe los datos del servidor atravez de un objeto JSON


app.use('/api', require('./routes/userRoutes'));

app.listen(3000);
console.log('Serve on port', 3000);