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
        const platform = req.body;
        PlatformRepository.getAll()
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

}

module.exports = new PlatformController();
