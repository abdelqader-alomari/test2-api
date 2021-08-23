const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
app.use(express.json())
app.use(cors());
const PORT = process.env.PORT || 8010
const mongoose = require('mongoose');
const { getUnis, favUnis, createUnis, updateUnis, deleteUnis } = require('./controller/uni.controller')

mongoose.connect(`${process.env.MONGO_URL}`,
    {
        useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
    });

app.get('/', function (req, res) {
    res.send('Hello Everyone')
})

app.listen(PORT);
console.log(`listening on server http://localhost:${PORT}`)

app.get('/getUnis', getUnis)
app.get('/favUnis', favUnis)
app.post('/createUnis', createUnis)
app.delete('/deleteUnis/:id', deleteUnis)
app.put('/updateUnis/:uni_id', updateUnis)

