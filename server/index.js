'use strict';
const path = require('path');
const http = require('http');
const server = http.createServer();
const express = require('express');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const app = express();

server.on('request', app);

let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: 'leereico@gmail.com',
        pass: 'andypam94361050'
    }
}));

app.use(volleyball);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public', 'img', 'favicon.ico')));


app.get('/send', function(req, res) {
    let mailOptions = {
        from: 'leereico@gmail.com',
        to: 'leereico@gmail.com',
        subject: "Portfolio Site Message from " + req.query.subject,
        text: "Sender: "+ req.query.subject + "\n" + "Email: "+ req.query.from + "\n" + "Message: "+req.query.text
    }
    console.log(mailOptions);

    transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log('Email sent');
    }
});

});

server.listen(process.env.PORT || 8080, function() {
    console.log('The server is listening on port 8080!');
});

module.exports = server;
