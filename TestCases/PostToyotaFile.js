var fs = require("fs");
var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:3000/upload',
  headers: 
   { 'Postman-Token': 'b8c45c96-a72b-4ab3-bd65-7406b38cb2a9',
     'cache-control': 'no-cache',
     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
  formData: 
   { file: 
      { value: 'fs.createReadStream("C:\\codechallenge\\filesToUpload\\carsToyota.csv")',
        options: 
         { filename: 'C:\\codechallenge\\filesToUpload\\carsToyota.csv',
           contentType: null } },
     vendor: 'Toyota' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
