const mongoose = require('mongoose');

const {Schema} = mongoose;

const schema = new Schema ({
    title: String,
    short_description: {
        type: String
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    },
    platform: {
        type: Schema.Types.ObjectId,
        ref: 'platform'
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: 'Publisher'
    },
    release_date: {
        type: String
    }
});

const Game = mongoose.model('Game', schema);

module.exports = Game;
