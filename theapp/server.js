var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var home = require('./routes/home');

var port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//body Parser middlewear
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', home);

app.post('/api/loginPost',function(req,res){
	var x = req.body.var1;
	//res.send(JSON.stringify(var1));

	console.log('Post Worked : ' + String(x));
	
});

app.listen(port, function(){
	console.log('Server started on port 3000');
});