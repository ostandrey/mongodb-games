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
}

module.exports = new GenreRepository(Genre);
