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

    getOne(id) {
        return this.model.findById(id)
            .populate('platform')
            .exec()
    }

    update(id, object) {
        return this.model.findOneAndUpdate(id, object, {new: true})
    }


    delete(id) {
        return this.model.findByIdAndDelete(id)
    }
}

module.exports = new GameRepository(Game);
