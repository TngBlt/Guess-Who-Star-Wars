let request = require('request');
let rp = require('request-promise');



module.exports = {
    getAllPerson : function() {

        // All people from the call
        let all_people_json = {"people":[]};

        return new Promise(function (resolve, reject) {

            GetPerson('https://swapi.co/api/people');

            function GetPerson(uri) {

                let options = {
                    uri : uri,
                    json:true
                };
                rp.get(options).then(result => {
                    // Add to the people array
                    result['results'].forEach(function (elem) {
                        all_people_json['people'].push(elem);
                    });
                    // Get the next url to call
                    let next = result['next'];
                    if(next !== undefined && next !== null) {
                        // Set the options with the new url
                        GetPerson(next);
                    }
                    else {
                        // The last page, return all people
                        resolve(all_people_json);
                    }
                })

            }
        })
    },

    getOnly13People : function () {
        let people = {"people":[]};

        let options = {
            uri : "https://swapi.co/api/people",
            json:true
        };
        return new Promise(function(resolve,reject) {
            rp.get(options).then(result => {
                // Add to the people array
                result['results'].forEach(function (elem) {
                    people['people'].push(elem);
                });
                options.uri = "https://swapi.co/api/people?page=2";
                rp.get(options).then(result => {
                    result['results'].forEach(function (elem) {
                        if(people['people'].length < 13){
                            people['people'].push(elem);
                        }

                    });
                    resolve(people);
                });


            })
        })

    }

};
