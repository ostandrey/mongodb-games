const Genre = require('../Genre');

class GenreRepository {
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
    }

    delete(id) {
        return this.model.findByIdAndDelete(id)
    }
}

module.exports = new GenreRepository(Genre);
