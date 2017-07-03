var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 5656;

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded( {extended: true}));

//GET
app.get('/*', function(req, res) {
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, '/public', file));
});

//listening on port 5656
app.listen(port, function(){
  condole.log("server running on port:", port);
});
