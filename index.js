// My main file
var express = require("express");
var app = express();

app.get('/', function (req, res) {
  var o = {
    msg: "Hello from node (JSON)"
  };
  res.type('application/json');
  res.send(JSON.stringify(o));
});

app.get('/index.html', function(req, res) {
  res.type('png'); 
  res.send("<html><body><h3>Hello from express</h3></body></html>")
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!!');
});
