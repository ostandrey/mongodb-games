const GameRepository = require('../models/repositories/GameRepository');

class GameController {
    constructor(){}

    create (req, res) {
        const game = req.body;
        GameRepository.create(game)
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

    getAll (req, res) {
        GameRepository.getAll(req)
            .then (
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )

    }

    getOne (req, res) {
        GameRepository.getOne(req.params.id)
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

    delete (req, res) {
        GameRepository.delete(req.params.id)
            .then( res.status(200) )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }

    update (req, res) {
        const game = req.body;
        GameRepository.update(req.params.id, game)
            .then(
                data => { res.status(200).json(data) }
            )
            .catch(
                error => { res.status(error.status).json(error) }
            )
    }
}

module.exports = new GameController();
