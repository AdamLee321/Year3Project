var express = require('express');
var app = express();
var client = require('twilio')('ACc9d4aa6e217a1d8487c569ade94f88ec', '05b4cf9978c90d952b0f4c7ab18fb967');

app.get('/testtwilio', function(req, res){
	client.sendMessage({
		to: '+353871030431',
		from: '353768887153',
		body: 'Hello World from twillio'
	}, function(err, data){
		if(err)
			console.log(err);
		console.log(data);
	});
});

app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("Server running port 3000");