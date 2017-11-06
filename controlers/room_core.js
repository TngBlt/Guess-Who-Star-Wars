let request = require('request');

module.exports = {
    selectPerson : function (allPeople) {
        let number = Math.floor(Math.random()*(12));
        return  allPeople['people'][number];
    }
};
