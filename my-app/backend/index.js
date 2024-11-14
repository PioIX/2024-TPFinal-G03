
var express = require('express');
var bodyParser = require('body-parser');
var cors = require("cors");

var MySql = require('./sql/modulos/mysql.js');

var app = express();
var port = process.env.PORT || 3001;
app.use(cors());


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// GET
app.get('/', function(req, res){
	console.log("getBardra")
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
});

app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
	console.log('Defined routes:');
	console.log(`	[GET] http://localhost:${port}/`);
});

