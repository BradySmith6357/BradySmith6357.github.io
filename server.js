var fs = require('fs')
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var nodemailer = require('nodemailer');
var app = express();

var generator = require('xoauth2').createXOAuth2Generator({
    user: 'bsmit6357@gmail.com',
    clientId: '855490167743-t3hum7ki3108tnuoqgrg2l81tk2ouire.apps.googleusercontent.com',
    clientSecret: 'CSji2-61GjcKTazvIIcBmB95',
    refreshToken: '1/Pd9ESLMe2APu6OfAlrE4uQj1Q0AjfQoOE2es3C-Dz7U',
});



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));


app.get('/', function(req, res){
	res.sendFile('index.html', {root: './'})
})

// ***** NODEMAILER *****

// generator.on('token', function(token){
//     console.log('New token for %s: %s', token.user, token.accessToken);
// });

// app.post('/api/send', function(req, res){
// 	console.log(req.body)
// 	var transporter = nodemailer.createTransport(({
//     service: 'gmail',
//     port: 465,
//   	secure: true,
//     auth: {
//         xoauth2: generator
//     }
// }));

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
 
// create reusable transporter object using the default SMTP transport 
var transporter = nodemailer.createTransport('smtps://bsmit6357@gmail.com:St33lers11@smtp.gmail.com');
 
// setup e-mail data with unicode symbols 
var mailOptions = {
    from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address 
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers 
    subject: 'Hello ✔', // Subject line 
    text: 'Hello world 🐴', // plaintext body 
    html: '<b>Hello world 🐴</b>' // html body 
};
 
// send mail with defined transport object 
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});





var port = 3000
app.listen(port, function(){
	console.log("Running on port:", port)
})