const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const keys = require('./config/keys')

require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(authRoutes);

app.get('/', (req, res) => {
    res.send({hi:'there'});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);