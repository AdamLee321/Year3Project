var LocalStrategy = require('passport-local').Strategy;
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'year3database'
});


//////////////////////////
  // Got this from https://gist.github.com/manjeshpv/84446e6aa5b3689e8b84 and altered , mainly to stop SQL injection
  /////////////////////////

module.exports = function(passport){
  passport.serializeUser(function(user,done){
      done(null,user.id);
  });
  passport.deserializeUser(function(id,done){
    connection.query("select * from Usertbl where username = ?",[id],function(err,rows){
      done(err,rows[0]);
    });
  });

  
  passport.use('local-login', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'pin',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

         connection.query("SELECT * FROM `Usertbl` WHERE `username` = ?",[username],function(err,rows){
			if (err)
                return done(err);
			 if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            } 
			
			// if the user is found but the password is wrong
            if (!( rows[0].hashed_pin == pin)) //Need to hash this ************************************************************************************************************ notice me
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
			
            // all is well, return successful user
            return done(null, rows[0]);			
		
		});
		


    }));


}
