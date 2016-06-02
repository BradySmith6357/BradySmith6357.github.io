var fs = require('fs')
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var nodemailer = require('nodemailer');
var app = express();



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));


app.get('/', function(req, res){
	res.sendFile('index.html', {root: './'})
})

// ***** NODEMAILER *****

app.get('/api/send', function(req, res){
	console.log(req.body)
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'bsmit6357@gmail.com',
			pass: 'St33lers11'
		} 
	});

	var mailOptions = {
	    from: '<bradysmith6357@github.io>', 
	    to: 'bsmit6357@gmail.com', 
	    subject: 'Message from Your Website!', 
	    text: 'You have a new email submitted through the your website. From: ' + req.body.name + 'Email: ' + req.body.address + 'Subject: ' + req.body.subject + 'Message: ' + req.body.message,
	    html: '<p>You have a new email submitted through your website. Details Below</p><ul><li>From: ' + req.body.name + '</li><li>Email: ' + req.body.address + '</li><li>Subject: ' + req.body.subject + '</li><li>Message: ' + req.body.message + '</li></ul>'
	};

	transporter.sendMail(mailOptions, function(err, info){
	    if(err){
	        console.log(err);
	        res.send(err)
	    } else {
	    	console.log('Message Sent: ' + info.response)
	    	res.send(info)
	    }
	});
});

// ***** NODEMAILER WITH XOAUTH2 *****

// app.get('/api/send', function(req, res){
// 	console.log(req.body)
// 	var transporter = nodemailer.createTransport({
// 		service: 'Gmail',
// 		auth: {
// 			XOAuth2: {
// 				user: "bsmit6357@gmail.com",
// 				clientId: "855490167743-t3hum7ki3108tnuoqgrg2l81tk2ouire.apps.googleusercontent.com",
// 				clientSecret: "CSji2-61GjcKTazvIIcBmB95",
// 				refreshToken: "1/Pd9ESLMe2APu6OfAlrE4uQj1Q0AjfQoOE2es3C-Dz7U"
// 			}
// 		} 
// 	});

// 	var mailOptions = {
// 	    from: '<bsmit6357@gmail.com>', 
// 	    to: 'bsmit6357@gmail.com', 
// 	    subject: 'Message from Your Website!', 
// 	    text: 'You have a new email submitted through the your website. From: ' + req.body.name + 'Email: ' + req.body.address + 'Subject: ' + req.body.subject + 'Message: ' + req.body.message,
// 	    html: '<p>You have a new email submitted through your website. Details Below</p><ul><li>From: ' + req.body.name + '</li><li>Email: ' + req.body.address + '</li><li>Subject: ' + req.body.subject + '</li><li>Message: ' + req.body.message + '</li></ul>'
// 	};

// 	transporter.sendMail(mailOptions, function(err, info){
// 	    if(err){
// 	        console.log(err);
// 	        res.send(err)
// 	    } else {
// 	    	console.log('Message Sent: ' + info.response)
// 	    	res.send(info)
// 	    }
// 	});
// });




var port = 3000
app.listen(port, function(){
	console.log("Running on port:", port)
})