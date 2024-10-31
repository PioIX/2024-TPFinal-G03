//seccion recibir datos
var express = require ("express"); //Tipo de servidor: Express
const cors = require('cors');
var bodyParser = require("body-parser"); //Convierte los JSON
const MySQL = require("./modulos/mysql.js");//Declaro SQL




var MySql = require('./modulos/mysql.js');

const app = express();	
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:3000', 'http://localhost:3001','http://localhost:4000']
}));
var port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


//seccion GET
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


app.get('/pokemons', async function(req,res){
	console.log(req.query)
   
	let	respuesta = await MySql.realizarQuery(`SELECT * FROM pokemons;`);
	res.send(respuesta)
})

app.get('/pokemonsName', async function(req,res){
	console.log(req.query)
   
	let	respuesta = await MySql.realizarQuery(`SELECT name FROM pokemons;`);
	res.send(respuesta)
})

app.get('/pokemonMovs', async function(req,res){
	console.log("ID movPokemons" ,req.query.Id)
	
	let	respuesta = await MySql.realizarQuery(`SELECT move FROM moves_pokemons where pokemonId=${req.query.Id};`);
	res.send(respuesta)
})

app.post('/insertarPokemons', async function(req,res) {
	console.log("Pokemos recibido del front:",req.body)
	console.log(`select * from pokemons where Id=${req.body.Id};`)
	let result = await MySql.realizarQuery(`select * from pokemons where Id=${req.body.Id};`) 

	if (result.length == 0){
		let result = await MySql.realizarQuery(`select * from pokemons where Id=${req.body.Id};`) 
		if (result.length == 0){

			await MySql.realizarQuery(`INSERT INTO pokemons (Id,name,ps,atk,def,spa,spd,spe,weight,type1,type2,spriteFront,spriteBack)
				VALUES (${req.body.Id}, '${req.body.name}',${req.body.ps},${req.body.atk},${req.body.def},${req.body.spa},${req.body.spd},${req.body.spe},${req.body.weight},'${req.body.type1}','${req.body.type2}','${req.body.spriteFront}','${req.body.spriteBack}')`);
				res.send("oki")
		}

	}
	else{
		res.send("ya existre")
	}
})

app.post('/insertarMoves', async function(req,res) {
	let result = await MySql.realizarQuery(`select * from moves_pokemons where pokemonId=${req.body.Id};`) 
	console.log(req.body.moves)

	let queryString = 'INSERT INTO moves_pokemons (pokemonId, move) VALUES ';

	for (const move of req.body.moves) {
		console.log(move)
		queryString += `(${req.body.Id}, '${move}'), `
		// MySql.realizarQuery(`INSERT INTO moves_pokemons (pokemonId,move)
		// VALUES (${req.body.Id}, '${move}')`);
	}

	console.log(queryString.slice(0, -2));

	MySql.realizarQuery(queryString.slice(0, -2)).catch((error) => {
		console.log(error);
		return res.send("oki")
	});

	return res.send("oki")
})

app.delete('/borrarMoves', async function(req,res) {
	await MySql.realizarQuery(`DELETE FROM moves_pokemons`)
	res.send("oki");
})

/*app.get('/usuarios', async function(req,res){
	console.log(req.query)
   
	let	respuesta = await MySql.realizarQuery(`SELECT * FROM Usuarios;`);
	res.send(respuesta)
})

app.get('/futbolistas', async function(req,res){
    console.log(req.query)
   
	let	respuesta = await MySql.realizarQuery(`SELECT * FROM Futbolistas;`);
	res.send(respuesta)

})

//seccion POST

app.post('/insertarUsuarios', async function(req,res) {
	console.log(req.body)
	let result = await MySql.realizarQuery(`select * from Usuarios where ID_usuario=${req.body.ID_usuario};`) 
	if (result.length == 0){
		await MySql.realizarQuery(`INSERT INTO Usuarios (ID_usuario, nombre, contrasenia, puntos)
		VALUES (${req.body.ID_usuario}, '${req.body.nombre}', '${req.body.contrasenia}',${req.body.puntos})`);
		res.send("oki")

	}
	else{
		res.send("ya existre")
	}
})

app.post('/insertarFutbolistas', async function(req,res) {
	console.log("[POST] /insertarFutbolistas BODY:", req.body)
	let result = await MySql.realizarQuery(`select * from Futbolistas where ID_futbolista=${req.body.ID_futbolista};`) 
	if (result.length == 0){
		await MySql.realizarQuery(`INSERT INTO Futbolistas (ID_futbolista, nombre, apellido, ligaActual, posicion, seleccion, equipoActual, numeroEquipacion)
		VALUES (${req.body.ID_futbolista}, '${req.body.nombre}', '${req.body.apellido}','${req.body.ligaActual}','${req.body.posicion}','${req.body.seleccion}','${req.body.equipoActual}',${req.body.numeroEquipacion})`);
		res.send("oki")

	}
	else{
		res.send("ya existre")
	}
})

//seccion PUT

app.put('/modificarUsuarios', async function(req,res) {
	console.log(req.body)
	await MySql.realizarQuery(`UPDATE Usuarios SET ID_usuario=${req.body.ID_usuario}, nombre='${req.body.nombre}', contrasenia='${req.body.contrasenia}', puntos=${req.body.puntos}
	where ID_usuario = ${req.body.ID_usuario}`);
	res.send("oki")
})

app.put('/modificarFutbolistas', async function(req,res) {
	console.log(req.body)
	await MySql.realizarQuery(`UPDATE Futbolistas SET ID_futbolista=${req.body.ID_futbolista}, nombre='${req.body.nombre}', apellido='${req.body.apellido}', ligaActual='${req.body.ligaActual}', posicion='${req.body.posicion}', seleccion='${req.body.seleccion}', equipoActual='${req.body.equipoActual}', numeroEquipacion=${req.body.numeroEquipacion}
	where ID_futbolista = ${req.body.ID_futbolista}`);
	res.send("oki")
})


// seccion delete

app.delete('/borrarJugador', async function(req,res) {
	console.log(req.body)
	await MySql.realizarQuery(`DELETE FROM Futbolistas where ID_futbolista=${req.body.ID_futbolista}`)
	res.send("oki");
})

app.delete('/borrarUsuario', async function(req,res) {
	console.log(req.body)
	await MySql.realizarQuery(`DELETE FROM Usuarios where ID_usuario=${req.body.ID_usuario}`)
	res.send("oki");
})*/