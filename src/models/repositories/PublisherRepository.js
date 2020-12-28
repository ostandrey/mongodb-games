const Publisher = require('../Publisher');

class PublisherRepository {
    constructor(model) {
        this.model = model
    }

    create (object) {
        return this.model.create(object)
    }

    getAll () {
        return this.model.find()
    }

    getOne(id) {
        return this.model.findById(id)
    }

    delete(id) {
        return this.model.findByIdAndDelete(id)
    }
}

module.exports = new PublisherRepository(Publisher);
