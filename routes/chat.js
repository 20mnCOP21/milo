var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(appViews + '/chat.html');
});

module.exports = router;