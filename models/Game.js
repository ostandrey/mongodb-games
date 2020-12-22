const mongoose = require('mongoose');

const GameShema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true,
    },
    platform: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('games', GameShema);
