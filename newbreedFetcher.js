const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=` + process.argv[2], function (error, response, body) {
  // writeFileSync(process.argv[3], body);
  if (error) {
    console.log('get your life together');
    return
  }

  if (response.statusCode !== 200) {
    console.log('try again loser');
    return
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    // callback('error', undefined);
    console.log('not found');
  } else {
    console.log(data[0].description);
  }
});
