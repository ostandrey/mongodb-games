const Platform = require('../Platform');

class PlatformRepository {
    constructor(model) {
        this.model = model;
    }

    create (object) {
        return this.model.create(object)
    }

    getAll(){
        return this.model.find()
    }
}

module.exports = new PlatformRepository(Platform);

