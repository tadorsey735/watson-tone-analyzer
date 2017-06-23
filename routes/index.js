var express = require('express');
var router = express.Router();
var watson_controller = require('../controllers/watson_tone_ctrl');

/* GET home page. */
router.get('/', watson_controller.get_watson_home);

/* POST tone analysis. */
router.post('/watson/tone', watson_controller.analyze_tone);

module.exports = router;