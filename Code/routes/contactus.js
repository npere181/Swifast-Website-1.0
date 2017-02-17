//==========================================

//transporter object
var nodemailer = require('nodemailer');

var express = require('express');
var router = express.Router();


//set routers

router.get('/api/contactus', function(req, res, next) {
    res.send('This is the team contactus');
});

router.post('/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'driverlesscarinfo@gmail.com',
            pass: 'something'
        }
    });
    var mailOptions = {
        from: 'John Doe <johndoe@outlook.com>', //sender address
        to: 'driverlesscarinfo@gmail.com',
        Subject: 'email example',
        text: 'You have a new submission with following details..Name: ' + req.body.name + 'Email: ' + req.body.email + ' Message: ' + req.body.message,
        html: '<p>You got a new submission with the following details</p><ul></li>Name: ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>'

    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.redirect('/');
        } else {
            console.log("Message Sent:" + info.response);
            res.redirect('/');
        }
    });

});



module.exports = router;