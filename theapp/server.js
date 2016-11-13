var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var home = require('./routes/home');
var appointment = require('./routes/Appointment');
var testapi = require('./routes/testapi');
var auth = require('./routes/auth');

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
app.use('/api', appointment);
app.use('/testapi/',testapi);
app.use('/auth/',auth);

app.post('/api/loginPost',function(req,res){
	var x = req.body.var1;
	//res.send(JSON.stringify(var1));

	console.log('Post Worked : ' + String(x));
	
});

//////////////////////////////
//  Start PassportJS
/////////////////////////////
var cookieParser = require('cookie-parser');
var session = require('express-session');

var cookieName = 'HSE';
var cookieSecret = 'Shane McGowan is so handsome';
app.use(cookieParser());
app.use(session({
	secret: cookieSecret, //used to help encrypt sessions, keep it secret ;)
	name: cookieName,
	resave : true, //updates session on each view , stops session from ending
	saveUninitialized : false //cuts down on database traffic for anonymouse user
}));


var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));



app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);












//////////////////////////////
//	End PassportJS
/////////////////////////////




app.listen(port, function(){
	console.log('Server started on port 3000');
});