const Game = require('../Game');

class GameRepository {
    constructor(model) {
        this.model = model;
    }

    create(object) {
        return this.model.create(object);
    }

    getAll(request) {
        const searchString = request.query.title ? request.query.title : '.';
        const orderBy = request.query.sort === 'ascending' ? 1 :
            request.query.sort === 'descending' ? -1 : '';
        return this.model
            .find({title: {$regex: `${searchString}`, $options: 'i'}})
            .populate('genre')
            .populate('platform')
            .populate('publisher')
            .sort({title: `${orderBy}`, release: `${orderBy}`})
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
