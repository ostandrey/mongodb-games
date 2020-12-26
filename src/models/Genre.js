const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
    title: {
        type: String
    }
});

const Genre = mongoose.model('Genre', schema);
module.exports = Genre;
