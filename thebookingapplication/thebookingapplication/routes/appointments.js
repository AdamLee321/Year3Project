var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('appointmentlist', ['appointmentlist']);

//GET ALL THE APPOINTMENTS
router.get('/appointments', function(req, res, next){
	db.appointmentlist.find(function(err,appointments){
		if(err){
			res.send(err);
		}
		res.json(appointments);
	})
})

//GET TASKS ON DAY
router.get('/dayAppointments/:value', function(req, res, next){
	console.log(req.params.value);

	//gets date 24 hours ahead
	var endDate = new Date(req.params.value);
	endDate = new Date(endDate.setDate(endDate.getDate() + 1)).toISOString();

	//gets actual selected date
	var startDate = new Date(req.params.value).toISOString();

	console.log(startDate);
	console.log(endDate);
	
	db.appointmentlist.find({date: {'$gte': new Date(startDate),'$lt': new Date(endDate)}}, function(err,appointments){
		if(err){
			res.send(err);
		}
		console.log(appointments);
		res.json(appointments);
	})
});

module.exports = router;