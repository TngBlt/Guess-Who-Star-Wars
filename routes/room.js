let express = require('express');
let swapi_person = require('../models/swapi_person');
let room_core = require('../controlers/room_core');
let first_Image = require('first-image-search-load');
let router = express.Router();



/* GET Room page */
router.get('/:room', function (req,res, next) {
    let allPerson = swapi_person.getOnly13People();
    let img_People= [];
    let img_promises =[];
    allPerson.then(function (people) {
        //let selectedPerson = room_core.selectPerson(allPerson);
        console.log(people);
        people['people'].forEach( function (person) {
            let img = first_Image.getFirstImageURL(person.name);
            img.then(function (imgUrl) {
                person.img = imgUrl;
            });
            img_promises.push(img);
        });
        Promise.all(img_promises).then(function () {
            //console.log(img_People);
            //console.log(selectedPerson);
            res.render('room', {title:req.params.room, allPerson:people.people})
        });
    });
});

module.exports = router;