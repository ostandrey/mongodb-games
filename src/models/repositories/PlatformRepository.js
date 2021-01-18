const Platform = require('../Platform');

class PlatformRepository {
    constructor(model) {
        this.model = model;
    }

    create (object) {
        return this.model.create(object)
    }

    getAll(request){
        const searchString = request.query.title ? request.query.title : '.';
        return this.model.find({title: {$regex: `${searchString}`, $options: 'i'}})
    }

    getOne(id) {
        return this.model.findById(id)
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

