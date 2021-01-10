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

    getOne(id) {
        return this.model.findById(id)
    }

    findByTitle(title) {
        return this.model.findOne({title: title})
    }

    update(id, object) {
        return this.model.findOneAndUpdate(id, object, {new: true})
    }

    insert(platformsArray) {
        return this.model.insertMany(platformsArray)
    }


    delete(id) {
        return this.model.findByIdAndDelete(id)
    }
}

module.exports = new PlatformRepository(Platform);

