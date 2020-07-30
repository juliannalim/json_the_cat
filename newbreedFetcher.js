const fetchBreedDescription = function (breedName, callback) {

  const request = require('request');

  request(`https://api.thecatapi.com/v1/breeds/search?q=` + breedName, function (error, response, body) {
    if (error) {
      console.log('get your life together');
      return;
    }

    if (response.statusCode !== 200) {
      console.log('try again loser');
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('error', undefined);
      // console.log('not found');
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };