var fs = require('fs')
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
	res.sendFile('main.html', {root: './public/html'})
})

var port = 3000
app.listen(port, function(){
	console.log("Running on port:", port)
})