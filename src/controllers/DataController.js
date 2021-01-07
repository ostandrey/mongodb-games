const http = require('https');

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
                for (let key in body) {
                    genres[key] = body[key]['genre'];
                    platforms[key] = body[key]['platform'];
                    publishers[key] = body[key]['publisher'];
                    games[key] = body[key]['title']
                        // , 'short_description', 'release_date'];
                    // console.log(body[key]['genre'])
                }
                let uniqueGenres = [...new Set(genres)];
                let uniquePlatforms = [...new Set(platforms)];
                let uniquePublishers = [...new Set(publishers)];
                let uniqueGames = [...new Set(games)];
                console.log(uniqueGames);
                return
            });
            res.on('error', (error) => {
                console.log(error)
            })
        });
    }
}

module.exports = new DataController();
