const mongoose = require('mongoose');

const {Schema} = mongoose;

const schema = new Schema ({
    title: {
        type: String
    },
    short_description: {
        type: String
    },
    genre: {
        type: String
    },
    platform: {
        type: String
    },
    publisher: {
        type: String
    },
    release_date: {
        type: String
    }
});

const Game = mongoose.model('Game', schema);

module.exports = Game;
