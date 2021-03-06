const PlatformRepository = require('../models/repositories/PlatformRepository');

class PlatformController {
    constructor() {}

    create (req, res) {
        const platform = req.body;
        PlatformRepository.create(platform)
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

    getAll (req, res) {
        PlatformRepository.getAll(req)
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

    getOne (req, res) {
        console.log(req.params);
        PlatformRepository.getOne(req.params.id)
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

    delete (req, res) {
        PlatformRepository.delete(req.params.id)
            .then( res.status(200) )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

    update (req, res) {
        const platform = req.body;
        PlatformRepository.update(req.params.id, platform)
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }
}

module.exports = new PlatformController();
