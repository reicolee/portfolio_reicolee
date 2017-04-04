'use strict';
const path = require('path');
const http = require('http');
const server = http.createServer();
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const app = express();


server.on('request', app);

app.use(volleyball);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));


server.listen(process.env.PORT || 8080, function() {
      console.log('The server is listening on port 8080!');
    });

module.exports = server;