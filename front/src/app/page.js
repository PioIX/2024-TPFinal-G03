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
import { equipoValidado } from "./teamBuilder/page";
import { idUser } from "./teamBuilder/page";
import { useSocket } from "@/hooks/useSocket"


//console.log(damageCalculate(pokemons[1],pokemons[0],moves[0]))

export default function Home() {
  let [pokemonesCombatientes, setPokemonesCombatientes] = useState([pokemons[0], pokemons[1]])
  let [pokemonPropio, setPokemonPropio] = useState("")
  let [pokemonAjeno, setPokemonAjeno] = useState("")
  let [turnoPropio, setTurnoPropio] = useState(0)
  let [turnoRival, setTurnoRival] = useState(0)
  let [equipoPropio, setEquipoPropio] = useState([])
  let [equipoAjeno, setEquipoAjeno] = useState([])
  let [pokemonACambiarPropio, setPokemonACambiarPropio] = useState()
  let [pokemonACambiarAjeno, setPokemonACambiaraAjeno] = useState()
  let [ganador, setGanador] = useState("")
  let [movPropio, setMovPropio] = useState("")
  let [movRival, setMovRival] = useState("")
  let [coco, setCoco] = useState(0)

  const [recibidorMensaje, setRecibidorMensaje] = useState("")
  const [empezarCombate, setEmpezarCombate] = useState(false)
  const { socket, isConnected } = useSocket();
  const [ultimoMensaje, setUltimoMensaje] = useState("")
  const [salaConectada, setSalaConectada] = useState("")



  useEffect(() => {
    if (!socket) return;

    socket.on("newMessage", (data) => {
      console.log("RECIBI MENSAJE: ", data);
      let newMessage = data.message;
      console.log(newMessage)
      setRecibidorMensaje(newMessage)

    })

    socket.on("eleccionLead", (data) => {
      // console.log("RECIBI MENSAJE: ",data);
      let primerPokemon = JSON.parse(data.primerPokemon)
      let equipo = data.equipo
      console.log(primerPokemon)
      console.log(equipo)
      if (primerPokemon.idUser != idUser) {
        setEquipoAjeno(equipo)
        setPokemonAjeno(primerPokemon)

      }
    })

    socket.on("enviarMovimientoElegido", (data) => {
      // console.log("RECIBI MENSAJE: ",data);
      let primerPokemon = JSON.parse(data.primerPokemon)
      let equipo = data.equipo
      let turno = data.turno
      let mov = data.mov
      let cambioPokemonA = data.cambioPokemon
      let objetoTurno = {}
      let retorno = []
      let envio =[]
      console.log(primerPokemon)
      console.log(equipo)
      if (primerPokemon.idUser != idUser) {
        setEquipoAjeno(equipo)
        setPokemonAjeno(primerPokemon)
        setTurnoRival(turno)
        setMovRival(mov)
        setPokemonACambiaraAjeno(cambioPokemonA)

      }
      if (primerPokemon.idUser != idUser && turnoPropio != "") {
        //data.pokemonP,data.pokemonA,data.turnoP,data.turnoA,data.cambioPokemonP,data.cambioPokemonA,data.equipoP,data.equipoA,data.movP,data.movA
        //(turno(pokemonPropio, pokemonAjeno, turnoPropio, turnoRival, pokemonACambiarPropio, pokemonACambiarAjeno, equipoPropio, equipoAjeno, movPropio, movRival))

        objetoTurno = {
          pokemonP: pokemonPropio, pokemonA: primerPokemon, turnoP: turnoPropio,
          turnoA: turno, cambioPokemonP: pokemonACambiarPropio,
          cambioPokemonA: cambioPokemonA, equipoP: equipoPropio,
          equipoA: equipo, movP: movPropio, movA: mov
        }
        retorno = turno(
          objetoTurno.pokemonP, objetoTurno.pokemonA,
          objetoTurno.turnoP, objetoTurno.turnoA,
          objetoTurno.cambioPokemonP, objetoTurno.pokemonA,
          objetoTurno.equipoP, objetoTurno.equipoA,
          objetoTurno.movP, objetoTurno.movP
        )
        envio =JSON.stringify(retorno)
        socket.emit('turno', {retorno:envio});
      }
      socket.on("turno", (data) => {
        // console.log("RECIBI MENSAJE: ",data);
        let turno = JSON.parse(data.retorno)
        console.log(turno)
        if (turno[0].idUser != idUser) {
        }
      })
    })

  }, [socket, isConnected]);


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
    let primerPokemon = JSON.stringify(equipoPropio[event.target.value])
    console.log(primerPokemon)
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
    let turno = ""
    let mov = ""
    let primerPokemon = JSON.stringify(pokemonPropio)
    setMovPropio(event.target.value)
    setTurnoPropio(moves[pokemonPropio.moves[event.target.value]])
    mov = event.target.value
    turno = moves[pokemonPropio.moves[event.target.value]]
    socket.emit('enviarMovimientoElegido', { primerPokemon: primerPokemon, equipo: equipoPropio, turno: turno, mov: mov, cambioPokemon: "" });
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
    let primerPokemon = JSON.stringify(pokemonPropio)
    let turno = "change"
    let mov = ""
    let cambioPokemon = pokemons[event.target.value]
    setPokemonACambiarPropio(pokemons[event.target.value])
    console.log(pokemons[event.target.value])
    setTurnoPropio("change")
    socket.emit('enviarMovimientoElegido', { primerPokemon: primerPokemon, equipo: equipoPropio, turno: turno, mov: mov, cambioPokemon: cambioPokemon });
  }


  /*function setPokemonAcambiarAjenoF(event){
    setPokemonACambiaraAjeno(pokemons[event.target.value])
    console.log(pokemons[event.target.value])
    setTurnoRival("change")
  
  }*/

  function remplazarPokemonPropio(event) {
    pokemonPropio.combatiendo = false
    setPokemonPropio(pokemons[event.target.value])

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


  useEffect(() => {
    if (turnoPropio != "" && turnoRival != "") {
      console.log("Marti la puta que te pario")
      setTurnoPropio("")
      setTurnoRival("")
      setMovPropio("")
      setMovRival("")
    }
  }, [turnoPropio, turnoRival])

  function iniciarTurno() {
    setCoco(coco + 1)
    //console.log("LO QUE RECIBE TURNO: pokemonPropio",pokemonPropio,"pokemonAjeno ",pokemonAjeno,"turnoPropio ", turnoPropio,"turnoRival ",turnoRival,"pokemonACambiarPropio",pokemonACambiarPropio,"pokemonAcambiarAjeno",pokemonACambiarAjeno)
    if (pokemonPropio != "" && pokemonAjeno != "" && turnoPropio != "" && turnoRival != "") {
      let retorno = (turno(pokemonPropio, pokemonAjeno, turnoPropio, turnoRival, pokemonACambiarPropio, pokemonACambiarAjeno, equipoPropio, equipoAjeno, movPropio, movRival))
      setPokemonPropio(retorno[0])
      setPokemonAjeno(retorno[1])
      setCoco(coco + 1)
      setTurnoPropio("")
      setTurnoRival("")
      // setCoco es como el coco de TF2, si lo saco deja de actualizarse el useState pokemonPropio y pokemonAjeno. NO TOCAR.
      if (retorno[2][0] == false) {
        if (retorno[2][1] == true) {
          setGanador(1)
        }
        else {
          setGanador(2)
        }
      }
    }
    else {
      console.log("FALTAN DATOZ")
      console.log(equipoPropio)
    }
  }




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
          {pokemonPropio.moves.map((move, i) => (

            <button onClick={seleccionarAtaquePropio} value={i} key={i} disabled={pokemonPropio.pps[i] == 0}>{moves[move].name}</button>
          ))}

          <h3>Equipo propio</h3>
          {equipoPropio.filter(pokemon => pokemon.combatiendo == false && pokemon.isDefeated == false).map((pokemon, i) => (
            <div key={i}>
              <button type="radio" name="seleccionarPokemonPropio" value={pokemon.id} onClick={setPokemonACambiarPropioF}>{pokemon.apodo}</button>
            </div>
          ))}

          <h2>{pokemonAjeno.apodo}</h2>

          <h3>{pokemonAjeno.life}/{pokemonAjeno.stats[0]}</h3>





        </>}

    </div>
  );
}

/*      {equipoPropio.filter(pokemon => pokemon.isDefeated == false).map((pokemon,i)=>(
  <button key={i} onClick={remplazarPokemonPropio} value={pokemon.id}>{pokemon.apodo}</button> 
))}*/