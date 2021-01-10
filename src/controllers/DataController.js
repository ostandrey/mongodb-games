const http = require('https');
const PlatformRepository = require('../models/repositories/PlatformRepository');

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
                    addUniqueValue(game['genre'], genres);
                    addUniqueValue(game['platform'], platforms);
                    addUniqueValue(game['publisher'], publishers);

                    delete game['id'];
                    delete game['thumbnail'];
                    delete game['game_url'];
                    delete game['developer'];
                    delete game['freetogame_profile_url'];
                    games.push(game);
                }
                PlatformRepository.insert(platforms)
                    .then(_ => {'successfully saved'})
                    .catch(error => {throw new Error(error)});

                for (let game of games) {
                    PlatformRepository.findByTitle(game.platform)
                        .then(platform => {
                            console.log(platform.id);
                            game.platform = platform.id;
                        })
                        .catch(error => {throw new Error(error)})
                }
            });
            res.on('error', (error) => {
                console.log(error)
            })
        });
    }
}

const addUniqueValue = (value, array) => {
    const existingValue = array.find((item) => item.title === value);
    if (!existingValue) {
        array.push({title: value});
    }
};

module.exports = new DataController();
