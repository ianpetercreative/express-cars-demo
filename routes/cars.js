var express = require('express');
var router = express.Router();

const carsCtrl = require('../controllers/cars');

/* GET users listing. */
// all paths start with /cars 

router.get('/', carsCtrl.index);

module.exports = router;
