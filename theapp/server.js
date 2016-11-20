var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport')

var home = require('./routes/home');
var appointment = require('./routes/Appointment');
var testapi = require('./routes/testapi');

var port = 3000;

require('./routes/auth')(app, passport);
require('./config/passport')(passport);

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//body Parser middlewear
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//for cookies
app.use(cookieParser());


app.use('/', home);
app.use('/api', appointment);
app.use('/testapi/',testapi);


//Passport JS Setup
var cookieName = 'HSE';
var cookieSecret = 'Shane McGowan is so handsome';
app.use(session({
	secret: cookieSecret, //used to help encrypt sessions, keep it secret ;)
	name: cookieName,
	resave : true, //updates session on each view , stops session from ending
	saveUninitialized : false //cuts down on database traffic for anonymouse user
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash()); //for flash messages







app.listen(port, function(){
	console.log('The party starts on port ' + port);
});

