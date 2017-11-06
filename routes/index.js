let express = require('express');
let swapi_person = require('../models/swapi_person');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Guess Who - Star Wars' });
});

router.post('/create_room',function (req,res) {
    res.redirect('room/'+req.body['Room name'])
});

module.exports = router;
