const router = require('express').Router();
const db = require('../middleware/db');

/**
 * Renders the app
 * @param  {[Object]} req the request
 * @param  {[Object]} res the response
 * @return {[type]}     [description]
 */
router.get('/dash', function(req, res) {
  // Select all templates from db
  db.query("SELECT * FROM templates", function(err, queryResult, fields) {
    if (err) {
      throw err;
    }
    // Render app using results from db query
    res.render('app', {
      queryResult: queryResult
    });
  });
});

router.get('/', function(req, res) {
  res.render('home');
});

router.get('/welcome', function(req, res) {
  res.render('home');
});

module.exports = router;