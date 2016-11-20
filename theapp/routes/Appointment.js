var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var moment = require('moment');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'year3database'
});

router.get('/dayAppointments/:selDate', function(req, res, next){
    var endDate = new Date(req.params.selDate);
    endDate = new Date(endDate.setDate(endDate.getDate() + 1));
    endDate = new Date(endDate.setHours(endDate.getHours() - 12));
    var stringEnd = moment(endDate).format('YYYY-MM-DD hh:mm:ss');



    var startDate = new Date(req.params.selDate);
    startDate = new Date(startDate.setHours(startDate.getHours() - 12));
    var stringStart = moment(startDate).format('YYYY-MM-DD hh:mm:ss');

    console.log(stringStart);
    console.log(stringEnd);

    connection.query("SELECT a.dateOfApp, p.p_Fname, p.p_Lname, ph.Phy_Fname, ph.Phy_Lname FROM appointment as a INNER JOIN patientappointment as pa ON pa.Appointment_App_id = a.App_id INNER JOIN patient as p ON pa.Patient_Usertbl_user_id = p.Usertbl_user_id INNER JOIN physiotherapist as ph ON pa.PhysioTherapist_Usertbl_user_id = ph.Usertbl_user_id WHERE a.dateOfApp BETWEEN ? AND ?",[stringStart, stringEnd], function(error, checkappTime){
        if (!!error){
            console.log(error);
        }
        else{
            console.log(checkappTime);
            res.json(checkappTime);
        }
    });
})

//GETS APPOINTMENTS
router.get('/dayAppointments/:TheLocation/:ALocation', function(req, res, next){ //Needs to be changed
    var LocationString = req.params.ALocation;
    console.log(LocationString + " - This is from Appointment.js");
    connection.query("SELECT p.Phy_Fname, p.Phy_Lname from physiotherapist as p JOIN clinics as c ON p.Clinics_ClinicID = c.ClinicID WHERE c.c_County = ?", [LocationString], function(error, names){
        if(!!error){
            console.log(error);
        }
        else{
            console.log(names);
            res.json(names);
        }
    })
})


router.get('/dayAppointments/:theDatevalue/:PhysioFName/:PhysioLName', function(req, res, next){
    console.log("ok Im getting to the application.js file");
    var newdate = new Date(req.params.theDatevalue);
    var datestring = moment(newdate).format('YYYY-MM-DD hh:mm:ss');
    
    var PhysioFName = req.params.PhysioFName;
    var PhysioLName = req.params.PhysioLName;
    console.log(datestring);
    console.log(PhysioFName);
    console.log(PhysioLName);

    connection.query("SELECT a.dateOfApp FROM appointment as a INNER JOIN patientappointment as pa ON a.App_id = pa.Appointment_App_id INNER JOIN physiotherapist as ph ON pa.PhysioTherapist_Usertbl_user_id = ph.Usertbl_user_id WHERE a.dateOfApp = ? && ph.phy_Fname = ? && ph.phy_Lname = ?", [datestring, PhysioFName, PhysioLName], function(error, rows){
        if (!!error){
            console.log(error);
            console.log("Am I getting here?");
        }
        else{
            console.log(rows);
            res.json(rows);
            console.log("I cant be possibly getting here");
        }
    })
})

module.exports = router;