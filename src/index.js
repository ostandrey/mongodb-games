const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/index.js');

mongoose.Promise = global.Promise;

const app = express();

app.use('/', routes);

mongoose
    .connect('mongodb://localhost:27017/mongodb-games', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('mongodb started.');
        app.listen(8000, () => {
            console.log('Server started on 8000');
        });
    })
    .catch(() => {
    console.log('Mongodb connection failed.');
});
