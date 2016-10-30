var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var home = require('./routes/home');
var appointments = require('./routes/appointments')

var port = 3001;

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', home);
app.use('/api', appointments);

app.listen(port, function(){
	console.log('Server started on port' + port);
});