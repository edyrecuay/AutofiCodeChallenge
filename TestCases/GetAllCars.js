var request = require("request");

var options = { method: 'GET',
  url: 'http://localhost:3000/allcars',
  headers: 
   { 'Postman-Token': '36c0430e-d7f4-4247-8733-cb10b5cbeaac',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
