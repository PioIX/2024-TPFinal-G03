
const express = require('express');						// Para el manejo del web server
const bodyParser = require('body-parser'); 				// Para el manejo de los strings JSON
const MySql = require('./modulos/mysql');				// Añado el archivo mysql.js presente en la carpeta módulos
const session = require('express-session');				// Para el manejo de las variables de sesión
const cors = require('cors')
const app = express();		



app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:3000', 'http://localhost:3001', 'http://localhost:3004','http://localhost:4000']
}));
var port = process.env.PORT || 3001;
var port_socket = process.env.PORT || 3004;	

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

const LISTEN_PORT = 3001;								// Puerto por el que estoy ejecutando la página Web
const server = app.listen(LISTEN_PORT, () => {
	console.log(`Server running in http://localhost:${LISTEN_PORT}`);
	console.log('Defined routes:');
	console.log(`[GET] http://localhost:${LISTEN_PORT}`);
});;

const io = require('socket.io')(server, {
	cors: {
		// IMPORTANTE: REVISAR PUERTO DEL FRONTEND
		origin: ["http://localhost:3000","http://localhost:3004"],            	// Permitir el origen localhost:3000
		methods: ["GET", "POST", "PUT", "DELETE"],  	// Métodos permitidos
		credentials: true                           	// Habilitar el envío de cookies
	}
});

const sessionMiddleware = session({
	//Elegir tu propia key secreta
	secret: "supersarasa",
	resave: false,
	saveUninitialized: false
});

app.use(sessionMiddleware);

io.use((socket, next) => {
	sessionMiddleware(socket.request, {}, next);
});

// ---------------------------------------------------------SECCIÓN SOCKET -------------------------------------------
let movs = {j1:"",j2:""}

io.on("connection", (socket) => {
	const req = socket.request;

	socket.on('joinRoom', data => {
		console.log("🚀 ~ io.on ~ req.session.room:", req.session.room)
		console.log(data)
		if (req.session.room != undefined && req.session.room.length > 0)
			socket.leave(req.session.room);
		req.session.room = data.room;
		socket.join(req.session.room);

		io.to(req.session.room).emit('salaCombate', {room: req.session.room });
	});

	socket.on('pingAll', data => {
		console.log("PING ALL: ", data);
		io.emit('pingAll', { event: "Ping to all", message: data });
	});

	socket.on('sendMessage', data => {
		console.log(data)
			io.to(req.session.room).emit('newMessage', { room: req.session.room, message: data.pokemon1});

	});

	socket.on('enviarLeadYEquipo', data =>{
		console.log(data)
			io.to(req.session.room).emit('eleccionLead', { room: req.session.room, primerPokemon: data.primerPokemon, equipo: data.equipo});
	})

	socket.on('enviarMovimientoElegido', data =>{
		console.log("ESTAS EN ENVIAR MOVIMIENTO")
			io.to(req.session.room).emit('enviarMovimiento', { room: req.session.room, datos:data.datos});
	})
	
	socket.on('turno', data =>{
		//si alguien ve esto, solo quiero que sepa que a pesar de que esta función me va a hacer sufrir, no me arrepiento de estar haciendo un juego de pokemon
		// para aclarar las cosas, "P" indica "Propio" y "A", "Ajeno"
		io.to(req.session.room).emit('devolverTurno', { room: req.session.room, retorno:data.retorno});
	})

	socket.on('remplazarPokemon',data=>{
		io.to(req.session.room).emit('remplazarPokemon', { room: req.session.room, pokemon:data.pokemon});

	})

	socket.on('disconnect', () => {
		console.log("Disconnect");
	})
});

// --------------------------------------------------------- FIN SECCIÓN SOCKET -------------------------------------------

//seccion GET
app.get('/', function(req, res){
	console.log("getBardra")
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
});

app.listen(port_socket, function(){
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

app.post('/calcularTurno', async function name(req, res) {

})