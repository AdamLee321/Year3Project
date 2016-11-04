var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'adam1994',
  database: 'year3database'
});
connection.connect(function(error) {
    if(!!error) {
        console.log('Error Adam');
    } else {
        console.log('Connected');
    }
});

//app.get('/', function(req, resp){
    //about mysql
    //connection.query("SQL QUERY", function(error, rows, field)
        //
    //});
//})
app.listen(1337);

