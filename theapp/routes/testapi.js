var express = require('express');
var api = express.Router();

var testData = { data : "Test Data"};

api.get('/get', function(req, res, next){
	console.log('Test Get Request');
    console.log(req.params);
    res.send(JSON.stringify(testData));
});

api.post('/post', function(req, res, next){
	console.log('Test Post Request');
    console.log(req.params);
    res.send(JSON.stringify(testData));
});



module.exports = api;