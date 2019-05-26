/* Require mysql and keys for db connection */
const mysql = require('mysql');
const keys = require('../config/keys');

/* Creates connection with database using info from keys.js */
var db = mysql.createConnection({
  host: keys.mysql.host,
  user: keys.mysql.user,
  password: keys.mysql.pass,
  database: keys.mysql.db
});

db.connect(function(err) {
  if (err) {
    throw err;
  }
});

/* Create, Read, Updated, Delete */



module.exports = db;