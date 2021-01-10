const mongoose = require('mongoose');

const {Schema} = mongoose;

const schema = new Schema ({
    title: {
        type: String
    }
});

const Platform = mongoose.model('platforms', schema);
module.exports = Platform;
