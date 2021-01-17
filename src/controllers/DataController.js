const http = require('https');
const PlatformRepository = require('../models/repositories/PlatformRepository');
const GenreRepository = require('../models/repositories/GenreRepository');
const PublisherRepository = require('../models/repositories/PublisherRepository');
const GameRepository = require('../models/repositories/GameRepository');

class DataController {

    constructor(){}

    getAll (req, res) {
        http.get('https://www.freetogame.com/api/games', (res) => {
            res.setEncoding('utf8');
            let body = '';
            res.on('data', (data) => {
                body += data;
            });
            res.on('end', () => {
                body = JSON.parse(body);
                const genres = [];
                const platforms = [];
                const publishers = [];
                const games = [];
                for (let game of body) {
                    DataController.addUniqueValue(game['genre'], genres);
                    DataController.addUniqueValue(game['platform'], platforms);
                    DataController.addUniqueValue(game['publisher'], publishers);

                    delete game['id'];
                    delete game['thumbnail'];
                    delete game['game_url'];
                    delete game['developer'];
                    delete game['freetogame_profile_url'];
                    games.push(game);
                }
                Promise.all([
                    DataController.fillPlatformsCollection(platforms),
                    DataController.fillGenresCollection(genres),
                    DataController.fillPublishersCollection(publishers),
                ])
                    .then(
                        onfulfilled => {
                            for (let game of games) {
                                const platformsSaved = onfulfilled[0];
                                const genresSaved = onfulfilled[1];
                                const publishersSaved = onfulfilled[2];

                                const platform = platformsSaved.find(item => item.title === game.platform);
                                game.platform = platform.id;
                                const genre = genresSaved.find(item => item.title === game.genre);
                                game.genre = genre.id;
                                const publisher = publishersSaved.find(item => item.title === game.publisher);
                                game.publisher = publisher.id;
                            }
                            DataController.fillGamesCollection(games)

                        },
                        onrejected => { console.log('rejected') }
                    )
            });
            res.on('error', (error) => {
                console.log(error)
            })
        });
    }

    static fillPlatformsCollection(platforms) {
        return PlatformRepository.insert(platforms)
            .then(
                data => data,
                onerror => {
                    throw new Error(onerror)
                }
            )
            .catch(error => {throw new Error(error)})
    }

    static fillGenresCollection(genres) {
        return GenreRepository.insert(genres)
            .then(
                data => data,
                onerror => {
                    throw new Error(onerror)
                }
            )
            .catch(error => {throw new Error(error)})
    }

    static fillPublishersCollection(publishers) {
        return PublisherRepository.insert(publishers)
            .then(
                data => data,
                onerror => {
                    throw new Error(onerror)
                }
            )
            .catch(error => {throw new Error(error)})
    }

    static fillGamesCollection(games) {
        return GameRepository.insert(games)
            .then(
                data => data,
                onerror => {
                    throw new Error(onerror)
                }
            )
            .catch(error => {throw new Error(error)})
    }

    static addUniqueValue(value, array) {
        const existingValue = array.find((item) => item.title === value);
        if (!existingValue) {
            array.push({title: value});
        }
    }
}

module.exports = new DataController();
