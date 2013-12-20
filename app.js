var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

// for test express
app.set('name', 'loopon');
console.log(app.get('name'));

app.enable('testable');
console.log(app.get('testable'));

app.listen(3000);
console.log('Listening on port 3000');