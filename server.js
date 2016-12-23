'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const Message = require('./messageCreate.js')

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(__dirname));

app.get('/messages', function(req, res) {

  Message.find({}, function(err, data) {

    res.send(data);

  })

});

app.post('/messages', function(req, res) {

const message = Message.create({
  message: req.body.message,
  created: req.body.date
  });

});


app.listen(3000, () => {
  console.log("... jimmy");
});
