const Game = require('../Game');

class GameRepository {
    constructor(model) {
        this.model = model;
    }

    create(object) {
        return this.model.create(object);
    }

    getAll() {
        return this.model.find()
    }
}

module.exports = new GameRepository(Game);
