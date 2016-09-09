var express = require('express');
var router = express.Router();

router.get('/hello', function(req, res) {
    res.status(200).json({success: true, msg: 'hi !'});
});

module.exports = router;