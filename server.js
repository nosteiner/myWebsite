
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


// Get our API routes
// const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/garageDoors')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// Nodemailer
app.post('/sendEmail', (req, res) => {
 
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ezxpressisrael@gmail.com',
      pass: '1Qazxsw@'
    }
  });

  var mailOptions = {
    from: req.body.name,
    to: 'no.steiner@gmail.com',
    subject: req.body.title,
    html: '<h2>'+ req.body.title +'</h2>'+
      '<p>'+  req.body.text +'</p>'+
      '<p><b>Name: </b>'+ req.body.name+'<p>'+
      '<p><b>Email: </b>'+ req.body.email+'<p>'
     
    };
  
  transporter.sendMail(mailOptions, function(error, info){
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




// Set our api routes
// app.use('/', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    console.log('yooooo')
  res.sendFile(path.join(__dirname, 'dist/garageDoors/index.html'));
//   res.sendFile('index.html', { root: path.join(__dirname, './dist/garageDoors') });
});
// app.get('*', function (req, res) {
//   const index = path.join(__dirname, 'dist', 'index.html');
//   res.sendFile(index);
// });

/**
 * Get port from environment and store in Express.
 */
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