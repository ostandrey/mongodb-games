const mongoose = require('mongoose');

const {Schema} = mongoose;

const schema = new Schema ({
    title: {
        type: String
    }
});

const Publisher = mongoose.model('Publisher', schema);
module.exports = Publisher;

