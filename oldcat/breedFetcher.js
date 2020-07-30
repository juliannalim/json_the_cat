const fetchBreedDescription = function (breedName, callback) {

  const request = require('request');
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function (error, response, body) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('error', undefined)
    } else {
      //console.log(data[0]['description']);
      //console.log(typeof data);
      callback(null, data[0]['description'])
    }
  })

};


module.exports = { fetchBreedDescription };