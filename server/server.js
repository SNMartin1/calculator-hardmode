var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 5656;

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded( {extended: true}));

//POST
app.post('/calucation', function(req, res){
  console.log('input recieved', req.body);
  var responseObject = {
    calculation: math(req.body)
  };
  res.send(responseObject);
});

//GET
app.get('/*', function(req, res) {
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, '/public', file));
});

//listening on port 5656
app.listen(port, function(){
  console.log("server running on port:", port);
});

var math = function(object) {
  switch (object.type) {
    case '+':
      return Number(object.input1) + Number(object.input2);
    case '-':
      return Number(object.input1) - Number(object.input2);
    case '*':
      return Number(object.input1) * Number(object.input2);
    case '/':
      return Number(object.input1) / Number(object.input2);
    default:
      break;
  } //end of switch statement
}; //end of math function
