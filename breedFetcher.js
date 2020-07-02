// const findingKitty = function (fileName, callback) {
//   fs.stat(fileName, (error, stats) => {
//     if (error) throw error;
//     callback(findingKitty);
//   })
// }

const fetchBreedDescription = function (breedName, callback) {

  const request = require('request');
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function (error, response, body) {
    //console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log(typeof body); // Print the HTML for the Google homepage.
    const data = JSON.parse(body);
    //console.log(data);
    //console.log(typeof data);
    console.error(("error: " + breedName + " not found!"), error);

  })

};

// const whenError = function (error) {
//   console.log("error: " + breedName + " not found!");
// }



module.exports = { fetchBreedDescription };