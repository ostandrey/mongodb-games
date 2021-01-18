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
        PublisherRepository.getAll(req)
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
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

    delete (req, res) {
        PublisherRepository.delete(req.params.id)
            .then( res.status(200) )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

    update (req, res) {
        const publisher = req.body;
        PublisherRepository.update(req.params.id, publisher)
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }
}

module.exports = new PublisherController();
