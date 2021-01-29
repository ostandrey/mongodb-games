const Genre = require('../Genre');

class GenreRepository {
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
            .sort({title: `${orderBy}`})
    }

    getOne(id) {
        return this.model.findById(id)
    }

    update(id, object) {
        return this.model.findOneAndUpdate(id, object, {new: true})
    }

    insert(genresArray) {
        return this.model.insertMany(genresArray)
    }

    delete(id) {
        return this.model.findByIdAndDelete(id)
    }
}

module.exports = new GenreRepository(Genre);
