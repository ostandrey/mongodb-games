const GenreRepository = require("../models/repositories/GenreRepository");

class GenresController {
    constructor() {}

    create (req, res) {
        const genre = req.body;
        GenreRepository.create(genre)
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

    getAll (req, res) {
        GenreRepository.getAll(req)
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

    getOne (req, res) {
        GenreRepository.getOne(req.params.id)
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

    delete (req, res) {
        GenreRepository.delete(req.params.id)
            .then( res.status(200) )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

    update (req, res) {
        const genre = req.body;
        GenreRepository.update(req.params.id, genre)
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }
}

module.exports = new GenresController();
