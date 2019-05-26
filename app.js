// Require express, a Node.js framework
const express = require('express');
const app = express();

// Database functionality

// Handles routes for users
const userRoutes = require('./routes/user-routes');
const authRoutes = require('./routes/auth-routes');
const bodyParser = require('body-parser');
// Use port 9999
const port = 9999;



// set the view engine to ejs
app.set('view engine', 'ejs');

// User routes for app
app.use(userRoutes);
app.use('/auth', userRoutes);

// Use public files
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/img'));
app.use(express.static(__dirname + '/public/js'));

// Use body parser for forms
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/dash', function(req, res) {
  console.log(req.body);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports = app;