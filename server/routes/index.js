var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("routing");
res.sendfile('../../web/app/dist/index.html');
});
module.exports = router;
