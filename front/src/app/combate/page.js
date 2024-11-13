"use client"

import styles from "./page.module.css";
import { species, Specie } from "@/clases/Species"
import { Pokemon, pokemons } from "@/clases/Pokemon"
import { pokemonForms, PokemonForm } from "@/clases/PokemonForm"
import { moves, Move } from "@/clases/moves"
import { Team } from "@/clases/Team"
import { Trainer } from "@/clases/Trainer"
import { damageCalculate, tirarMoneda, turno, descargarPokemons } from "@/funciones/funciones";
import { useState, useEffect } from "react"
import { equipoValidado } from "../teamBuilder/page";
import { idUser } from "../teamBuilder/page";
import { useSocket } from "@/hooks/useSocket"


//console.log(damageCalculate(pokemons[1],pokemons[0],moves[0]))

export default function Home() {
  const [pokemonPropio, setPokemonPropio] = useState("")
  let [pokemonAjeno, setPokemonAjeno] = useState("")
  let [turnoPropio, setTurnoPropio] = useState({})
  let [equipoPropio, setEquipoPropio] = useState([])
  let [ganador, setGanador] = useState("")
  let [coco, setCoco] = useState(0)
  let pureba = 0
  // este use state es la bestialidad que se le manda al socket para evitar los errores de actualización que tienen sus metodos.
  //Podría borrar los otros useState y hacer que el codigo sea bastante mas limpio, pero no estoy viendo un peso por esto.
  const [datosLocales, setDatosLocales] = useState({ pokemon: "", equipoPropio: [], turno: "", mov: 0.1, pokemonACambiar: {} })

  const [empezarCombate, setEmpezarCombate] = useState(false)
  const { socket, isConnected } = useSocket();
  const [ultimoMensaje, setUltimoMensaje] = useState("")
  const [salaConectada, setSalaConectada] = useState("")


  useEffect(() => {
    console.log(datosLocales)
  }, [datosLocales])

  useEffect(() => {
    if (!socket) return;

    socket.on("newMessage", (data) => {
      let newMessage = data.message;
      console.log(newMessage)
      setRecibidorMensaje(newMessage)

    })

    socket.on("eleccionLead", (data) => {
      // console.log("RECIBI MENSAJE: ",data);
      let primerPokemon = JSON.parse(data.primerPokemon)
      let equipo = data.equipo
      if (primerPokemon.idUser != idUser) {
        setPokemonAjeno(primerPokemon)

      }

    })

    socket.on("remplazarPokemon",(data) => {
      let pokemon = JSON.parse(data.pokemon)
      if (pokemon.idUser != idUser) {
        setPokemonAjeno(pokemon)
      }
    })

    socket.on("enviarMovimiento", (data) => {
      let datosObtenidos = JSON.parse(data.datos)
      let primerPokemon = datosObtenidos.pokemon
      let equipo = datosObtenidos.equipoPropio
      let turnoEnviado = datosObtenidos.turno
      let mov = datosObtenidos.mov
      let cambioPokemonA = datosObtenidos.pokemonACambiar
      let retorno = []
      let envio = []
      console.log("adentro del  socket enviar mov elegido data: ",data)
      setDatosLocales((datosLocalesActuales) => {
        if (parseInt(primerPokemon.idUser) != idUser && datosLocalesActuales.turno != "") {
          console.log("aca empezaría el turno")
          retorno = turno(
            datosLocalesActuales.pokemon,
            primerPokemon,
            datosLocalesActuales.turno,
            turnoEnviado,
            datosLocalesActuales.pokemonACambiar,
            cambioPokemonA,
            datosLocalesActuales.equipoPropio,
            equipo,
            datosLocalesActuales.mov,
            mov
          )
          datosLocalesActuales.turno=""
          envio = JSON.stringify(retorno)
          socket.emit('turno', { retorno: envio });

        }
        return datosLocalesActuales
      }
      )
    })



    socket.on("devolverTurno", (data) => {
      // console.log("RECIBI MENSAJE: ",data);
      let turno = JSON.parse(data.retorno)
      console.log({turno})
      let nuevoObjeto = { ...datosLocales }
      if (turno[0].idUser == idUser) {
        nuevoObjeto.pokemon = (turno[0])
        nuevoObjeto.equipoPropio = turno[2]
        nuevoObjeto.turno = ""
        nuevoObjeto.pokemonACambiar = {}
        nuevoObjeto.mov = 0.1
        setPokemonPropio(turno[0])
        setPokemonAjeno(turno[1])
        setEquipoPropio(turno[2])
        setTurnoPropio("")
         console.log("devolver turno mi turno")
        setDatosLocales(nuevoObjeto)
        if (turno[4][0] == false) {
          if (retorno[4][1] == true) {
            setGanador(1)
          }
          else {
            setGanador(2)
          }
        }
      }
      else {
        nuevoObjeto.pokemon = (turno[1])
        nuevoObjeto.equipoPropio = turno[3]
        nuevoObjeto.turno = ""
        nuevoObjeto.pokemonACambiar = {}
        nuevoObjeto.mov = 0.1
        setPokemonPropio(turno[1])
        setPokemonAjeno(turno[0])
        setEquipoPropio(turno[3])
        setTurnoPropio("")
        console.log("devolver turno mi turno otro turno")
        setDatosLocales(nuevoObjeto)
        if (turno[4][0] == false) {
          if (retorno[4][2] == true) {
            setGanador(1)
          }
          else {
            setGanador(2)
          }
        }
      }
    })

  }, [socket, isConnected]);





  useEffect(() => {
    console.log(pokemonAjeno)
  }, [pokemonAjeno])


  useEffect(() => {
    setEquipoPropio(equipoValidado)
  }, []
  )

  function enviarMensaje() {
    if (isConnected) {
      console.log(ultimoMensaje)
      socket.emit('sendMessage', { pokemon1: equipoPropio[0].apodo, chat: "sala1" });
    }
  }

  function seleccionarPokemonInicial(event) {
    setPokemonPropio(equipoPropio[event.target.value])
    let nuevoObjeto = { ...datosLocales }
    console.log(nuevoObjeto)
    let primerPokemon = JSON.stringify(equipoPropio[event.target.value])
    console.log(primerPokemon)
    nuevoObjeto.pokemon = equipoPropio[event.target.value]
    console.log("seleccionarPokemonInicial")
    setDatosLocales(nuevoObjeto)
    socket.emit('enviarLeadYEquipo', { primerPokemon: primerPokemon, equipo: equipoPropio });

  }

  useEffect(() => {
    if (pokemonAjeno != "" && pokemonPropio != "") {
      setEmpezarCombate(true)
    }
  }, [pokemonPropio, pokemonAjeno])

  function unirseAlaSala() {
    socket.emit('joinRoom', "sala1")
    setSalaConectada("sala1")
  }



  function seleccionarAtaquePropio(event) {
    let nuevoObjeto = { ...datosLocales }
    nuevoObjeto.turno = moves[pokemonPropio.moves[event.target.value]]
    nuevoObjeto.mov = event.target.value
    nuevoObjeto.pokemonACambiar = {}
    nuevoObjeto.equipoPropio = equipoPropio
    setTurnoPropio(moves[pokemonPropio.moves[event.target.value]])
    console.log("seleccionarAtaquePropio")
    setDatosLocales(nuevoObjeto)
    console.log("funcion del boton, emit: enviarMovimientoElegido")
    socket.emit('enviarMovimientoElegido', { datos: JSON.stringify(nuevoObjeto) });
  }

  /*  function seleccionarAtaqueAjeno(event) {
      if (event.target.value=="change") {
        setTurnoRival("change")
        //turnoAlterAjeno = "change"
      }
      else{
        setMovRival(event.target.value)
        setTurnoRival(moves[pokemonAjeno.moves[event.target.value]])
        //turnoAlterAjeno = moves[event.target.value]
      }
  
    }*/

  function setPokemonACambiarPropioF(event) {
    let nuevoObjeto = { ...datosLocales }
    nuevoObjeto.turno = "change"
    nuevoObjeto.mov = 0.1
    nuevoObjeto.pokemonACambiar = equipoPropio[event.target.value]
    nuevoObjeto.equipoPropio = equipoPropio
    setTurnoPropio("change")
    console.log("seleccionarAtaquePropio")
    setDatosLocales(nuevoObjeto)
    console.log("funcion boton cambio")
    socket.emit('enviarMovimientoElegido', { datos: JSON.stringify(nuevoObjeto) });

  }


  /*function setPokemonAcambiarAjenoF(event){
    setPokemonACambiaraAjeno(pokemons[event.target.value])
    console.log(pokemons[event.target.value])
    setTurnoRival("change")
  
  }*/

    function remplazarPokemonPropio(event) {
      console.log(event.target.value);  // This causes the error
      let nuevoObjeto = { ...datosLocales };
      nuevoObjeto.pokemon = JSON.parse(event.target.value);
      setPokemonPropio(JSON.parse(event.target.value));
      console.log(setPokemonPropio);
      setDatosLocales(nuevoObjeto);
      socket.emit('remplazarPokemon', { pokemon: event.target.value });
    }
    
  function actualizarPokemonPropio() {
    if (pokemonPropio != "") {
      pokemonPropio.combatiendo = true
      for (let i = 0; i < equipoPropio.length; i++) {
        if (equipoPropio[i] != pokemonPropio) {
          equipoPropio[i].combatiendo = false
        }
      }
      /*preguntar a franco porque no se acutaliza el quipo*/
      setCoco(coco + 1)
    }

  }

  useEffect(() => {
    actualizarPokemonPropio()

  }, [pokemonPropio])

  /*function remplazarPokemonAjeno(event){
    pokemonAjeno.combatiendo = false
    setPokemonAjeno(pokemons[event.target.value])
  }*/


  /*function actualizarPokemonAjeno(){
    if (pokemonAjeno != "") {
      pokemonAjeno.combatiendo = true
      for(let i = 0;i < equipoAjeno.length;i++) {
        if (equipoAjeno[i] != pokemonAjeno) {
          equipoAjeno[i].combatiendo = false
        }
      }
      setCoco(coco + 1)
    }
  
  }*/

  /*useEffect(()=>{
    actualizarPokemonAjeno()
    
  }, [pokemonAjeno])*/


  function batallaTerminada() {
    return <h3>holas</h3>
  }


  useEffect(() => {
    batallaTerminada()
  }, [ganador])





  return (
    <div >
      {empezarCombate == false
        ? <><h1>Seleccionar primer pokemon</h1>

          {salaConectada == ""
            ? <button onClick={unirseAlaSala}>unirseAlaSala</button>
            : <>

              {pokemonPropio == ""
                ? <>{equipoPropio.map((pokemon, i) => (
                  <button key={i} onClick={seleccionarPokemonInicial} value={i}>{pokemon.apodo}</button>
                ))}</>
                : <>
                  <p>Esperá a que el otro jugador elija su pokemon</p>

                </>
              }
            </>
          }
        </>
        : <>

          <h2>{pokemonPropio.apodo}</h2>

          <h3>{pokemonPropio.life}/{pokemonPropio.stats[0]}</h3>


          <br></br>
          {pokemonPropio.isDefeated == false && pokemonAjeno.isDefeated == false
            ? <>
              {datosLocales.turno == ""
                ? <>
                  {pokemonPropio.moves.map((move, i) => (

                    <button onClick={seleccionarAtaquePropio} value={i} key={i} disabled={pokemonPropio.pps[i] == 0}>{moves[move].name}</button>
                  ))}

                  <h3>Equipo propio</h3>
                  {equipoPropio.filter(pokemon => pokemon.combatiendo == false && pokemon.isDefeated == false).map((pokemon, i) => (
                    <div key={i}>
                      <button type="radio" name="seleccionarPokemonPropio" value={i} onClick={setPokemonACambiarPropioF}>{pokemon.apodo}</button>
                    </div>
                  ))}</>
                : <>
                  <p>Esperando al otro jugador</p>
                </>
              }

            </>
            : <>
              {pokemonPropio.isDefeated == true
                ? <><p>tu pokemon está debilitado, lol</p>
                  {equipoPropio.filter(pokemon => pokemon.isDefeated == false).map((pokemon, i) => (
                    <button key={i} onClick={remplazarPokemonPropio} value={pokemon}>{pokemon.apodo}</button>
                  ))}
                </>

                : <><p>tenés que esperar a que el otro elija su pokemon</p></>
              }

            </>
          }


          <h2>{pokemonAjeno.apodo}</h2>

          <h3>{pokemonAjeno.life}/{pokemonAjeno.stats[0]}</h3>

        </>}





    </div>
  );
}

/*     */