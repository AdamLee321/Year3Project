
modules.exports = function(app,passport){

app.get('/login',function(req,res,next){
    res.render('login.html'); //Change this
})

app.post('/login', passport.authenticate('local-login',{ 
        successRedirect : '/',
        failureRedirect: '/login'
    }), 
    function(req,res,next){ //function will only be called if passport.authenticate succeeds
        console.log('login authentication succeeded, redirecting');
        res.redirect('/');
    }
);

app.all('/logout',function(req,res,next){
    console.log('/auth/logout : Get/Post Request');
    req.logout();
    res.redirect('/login');
});

};

function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/login');
}



