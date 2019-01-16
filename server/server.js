const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const projects = require('../server/Projects');
const app = express();
const dotenv = require('dotenv').config();


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist/myWebsite')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/projects', function (req, res) {

  res.send(projects);
})

// Nodemailer
app.post('/sendEmail', (req, res) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
  }
  });
  var mailOptions = {
    from: req.body.name,
    to: 'no.steiner@gmail.com',
    subject: req.body.title,
    html: '<h2>' + req.body.title + '</h2>' +
      '<p>' + req.body.text + '</p>' +
      '<p><b>Name: </b>' + req.body.name + '<p>' +
      '<p><b>Email: </b>' + req.body.email + '<p>'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.send({
    success: true,
    message: 'Emails sent',
  });
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/myWebsite/index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);


/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = app;