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
}

module.exports = new PublisherRepository(Publisher);
