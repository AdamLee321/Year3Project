var passport = require('passport');
var express = require('express');
var router = express.Router();

//For a registration page if needed, sure why not have it
router.route('/register')
    .get(function(req,res,next){
        console.log('/auth/register : Get Request');
    })
    .post(function(req,res,next){
        console.log('/auth/register : Post Request');
    });


router.get('/login',function(req,res,next){
    res.render('home.html'); //Change this
})

router.post('/login', passport.authenticate('local'), function(req,res,next){ //function will only be called if passport.authenticate succeeds
    console.log('login authentication succeeded, redirecting');
    res.redirect('/');
});

router.all('/logout',function(req,res,next){
    console.log('/auth/logout : Get/Post Request');
    req.logout();
    res.redirect('/');
});

module.exports = router;