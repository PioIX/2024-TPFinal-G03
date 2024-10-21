
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

app.get('/traerUsuarios', async function(req, res){
	console.log(req.query)
	let lista = await MySql.realizarQuery(`select * FROM Usuarios`)
	res.send(lista)
})

//POST
app.post('/insertarUsuarios', async function(req,res) {
	console.log("POST /insertarUsuarios req.body:",req.body)
	let result = await MySql.realizarQuery(`select * from Usuarios where ID_usuario=${req.body.ID_usuario};`) 
	console.log(result)
	if (result.length == 0){
		await MySql.realizarQuery(`INSERT INTO Usuarios (ID_usuario, nombre, contrasenia, puntos)
		VALUES (${req.body.ID_usuario}, '${req.body.nombre}', '${req.body.contrasenia}', ${req.body.puntos})`);
		res.send("oki")

	}
	else{
		res.send("ya existre")
	}
})