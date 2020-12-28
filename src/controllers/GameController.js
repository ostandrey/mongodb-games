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
        GameRepository.getAll()
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
                data => {
                    res.status(200).json(data)
                }
            )
            .catch(
                error => {res.status(error.status).json(error)}
            )
    }

    delete (req, res) {
        GameRepository.delete(req.params.id)
            .then( res.redirect('/') )
            .catch(
                error => {res.status(error.status).json(error)}
            )
    }
}

module.exports = new GameController();
