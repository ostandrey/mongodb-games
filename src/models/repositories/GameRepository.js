const Game = require('../Game');

class GameRepository {
    constructor(model) {
        this.model = model;
    }

    create(object) {
        return this.model.create(object);
    }

    getAll(params) {
        const queryParams = {};
        if (params.title) {
            queryParams.title = params.title
        }
        return this.model.find(queryParams)
            .populate('genre')
            .populate('platform')
            .populate('publisher')
            .exec()
    }

    getOne(id) {
        return this.model.findById(id)
    }

    update(id, object) {
        return this.model.findOneAndUpdate(id, object, {new: true})
    }

    insert(gamesArray) {
        return this.model.insertMany(gamesArray)
    }

    delete(id) {
        return this.model.findByIdAndDelete(id)
    }
}

module.exports = new GameRepository(Game);
