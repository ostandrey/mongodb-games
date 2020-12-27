const PublisherRepository = require('../models/repositories/PublisherRepository');

class PublisherController {
    constructor() {}

    create (req, res) {
        const publisher = req.body;
        PublisherRepository.create(publisher)
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

    getAll (req, res) {
        PublisherRepository.getAll()
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error)}
            )
    }

    getOne (req, res) {
        PublisherRepository.getOne(req.params.id)
            .then(
                data => {
                    res.status(200).json(data)
                }
            )
            .catch(
                error => {res.status(error.status).json(error)}
            )
    }
}

module.exports = new PublisherController();
