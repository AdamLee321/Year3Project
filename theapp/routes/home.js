var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render('home.html');
});

//THESE MUST BE CHANGED IN THE FUTURE

router.get('/secdash', function(req, res, next){
	res.render('home.html');
});

router.get('/secdash', function(req, res, next){
	res.render('home.html');
});

router.get('/login', function(req, res, next){
	res.render('home.html');
});

router.get('/addPatient', function(req, res, next){
	res.render('home.html');
});


module.exports = router;