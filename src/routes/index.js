const express = require('express');
const genres = require('./genres.routes.js');
const platforms = require('./platforms.routes');
const publishers = require('./publishers.routes');
const games = require('./games.routes');
const http = require('https');

const router = express.Router();

router.use(express.json());

router.get('/data', (req, res) => {

    http.get('https://www.freetogame.com/api/games', (res) => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', (data) => {
            body += data;
        });
        res.on('end', () => {
            body = JSON.parse(body);
            console.log(body);
            return
        });
        res.on('error', (error) => {
            console.log(error)
        })
    })
});

router.use('/genres', genres);
router.use('/platforms', platforms);
router.use('/publishers', publishers);
router.use('/games', games);

//-------------------------- route for data

module.exports = router;
