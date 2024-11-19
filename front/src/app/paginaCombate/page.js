"use client"
// imports componentes
import '@/app/styles.css'
import Movimientos from "./Movimientos"
import PokemonesCombate from "./PokemonesCombate"
import PokemonesCambio from "./PokemonesCambio"
import Comentario from "./Comentario"
import PrimerPokemon from "./SeleccionPokemonInicial"
import PopUp from './PopUp'
// imports componentes FIN

import { moves, Move } from "@/clases/moves"
import { damageCalculate, tirarMoneda, turno, descargarPokemons } from "@/funciones/funciones";
import { useState, useEffect } from "react"
import { equipoValidado } from "../TeamBuilder/page";
import { id } from '../Logeo/page';
import { useSocket } from "@/hooks/useSocket"
import { salaElegida } from '../TeamBuilder/page'
import { useRouter } from 'next/navigation'

export default function PaginaCombate() {
    const router = useRouter()
    const [pokemonPropio, setPokemonPropio] = useState("")
    const idUser = id
    const [pokemonAjeno, setPokemonAjeno] = useState("")
    const [equipoPropio, setEquipoPropio] = useState([])
    const [ganador, setGanador] = useState("")
    const [coco, setCoco] = useState(0)
    // este use state es la bestialidad que se le manda al socket para evitar los errores de actualización que tienen sus metodos.
    //Podría borrar los otros useState y hacer que el codigo sea bastante mas limpio, pero no estoy viendo un peso por esto.
    //Al final eliminé la mayoría porque los pude remplazar
    const [datosLocales, setDatosLocales] = useState({ pokemon: "", equipoPropio: [], turno: "", mov: 0.1, pokemonACambiar: {} })
    const [empezarCombate, setEmpezarCombate] = useState(false)
    const { socket, isConnected } = useSocket();
    const [ultimoMensaje, setUltimoMensaje] = useState("")
    const [salaConectada, setSalaConectada] = useState("")
    const [informe, setInforme] = useState(["Empezó el combate!!!"])
    const [nuevoInforme, setNuevoInforme] = useState([])

    let switchParaElInforme = false
    
    useEffect(() => {
        console.log(datosLocales)
    }, [datosLocales])

    useEffect(() => {
        if (!socket) return;

        if (salaConectada == "") {
            console.log("unirse a la sala")
            socket.emit('joinRoom', salaElegida)
            setSalaConectada(salaElegida)
        }

        socket.on("newMessage", (data) => {
            let newMessage = data.message;
            console.log(newMessage)
            setRecibidorMensaje(newMessage)

        })

        socket.on("eleccionLead", (data) => {
            // console.log("RECIBI MENSAJE: ",data);
            let primerPokemon = JSON.parse(data.primerPokemon)
            if (primerPokemon.idUser != idUser) {
                setPokemonAjeno(primerPokemon)

            }

        })

        socket.on("remplazarPokemon", (data) => {
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
            switchParaElInforme = false
            console.log(switchParaElInforme)
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
                    datosLocalesActuales.turno = ""
                    envio = JSON.stringify(retorno)
                    socket.emit('turno', { retorno: envio });

                }
                return datosLocalesActuales
            }
            )
        })


        socket.on("devolverTurno", (data) => {
            let nuevoArray = []

            // console.log("RECIBI MENSAJE: ",data);
            let turno = JSON.parse(data.retorno)
            console.log({ turno })
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
                console.log("devolver turno mi turno")
                setDatosLocales(nuevoObjeto)
                if (turno[4][0] == false) {
                    if (turno[4][1] == true) {
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
                console.log("devolver turno mi turno otro turno")
                setDatosLocales(nuevoObjeto)
                if (turno[4][0] == false) {
                    if (turno[4][2] == true) {
                        setGanador(1)
                    }
                    else {
                        setGanador(2)
                    }
                }
            }
            setNuevoInforme(turno[5])
            //actualizarInforme(turno[5])
        })

    }, [socket, isConnected]);

    // NO PUEDO SOLUCIONAR EL INFORME DE TURNOS
   /* useEffect(()=>{
        let nuevoArray = [].concat(nuevoInforme)
        for (let x = 0; x < nuevoInforme.length; x++) {
            nuevoArray.push(nuevoInforme[x])
        }
        setInforme(nuevoArray)
    },[nuevoInforme])*/

    function actualizarInforme(array){
            console.log("INFORME: ",informe)
            let nuevoArray = []
            if (switchParaElInforme == false) {
                /*for (let x = 0; x < array.length; x++) {
                    console.log(array[x])
                    nuevoArray.push(array[x])
                }
                setInforme(nuevoArray)
                switchParaElInforme = true*/
                setInforme((informeActual)=>{
                    nuevoArray = [].concat(informeActual)
                    for (let x = 0; x < array.length; x++) {
                        nuevoArray.push(array[x])
                    }
                    setInforme(nuevoArray)
                    switchParaElInforme = true
                })
            }
            
    }

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

    function seleccionarPokemonInicial(valor) {
        setPokemonPropio(equipoPropio[valor])
        let nuevoObjeto = { ...datosLocales }
        let primerPokemon = JSON.stringify(equipoPropio[valor])
        nuevoObjeto.pokemon = equipoPropio[valor]
        setDatosLocales(nuevoObjeto)
        socket.emit('enviarLeadYEquipo', { primerPokemon: primerPokemon, equipo: equipoPropio });

    }

    useEffect(() => {
        if (pokemonAjeno != "" && pokemonPropio != "") {
            setEmpezarCombate(true)
        }
    }, [pokemonPropio, pokemonAjeno])




    function seleccionarAtaquePropio(event) {

        let nuevoObjeto = { ...datosLocales }
        nuevoObjeto.turno = moves[pokemonPropio.moves[event.target.value]]
        nuevoObjeto.mov = event.target.value
        nuevoObjeto.pokemonACambiar = {}
        nuevoObjeto.equipoPropio = equipoPropio
        console.log("seleccionarAtaquePropio")
        setDatosLocales(nuevoObjeto)
        console.log("funcion del boton, emit: enviarMovimientoElegido")
        socket.emit('enviarMovimientoElegido', { datos: JSON.stringify(nuevoObjeto) });
    }

    function setPokemonACambiarPropioF(i) {
        console.log(i)
        let nuevoObjeto = { ...datosLocales }
        nuevoObjeto.turno = "change"
        nuevoObjeto.mov = 0.1
        nuevoObjeto.pokemonACambiar = equipoPropio[i]
        nuevoObjeto.equipoPropio = equipoPropio

        setDatosLocales(nuevoObjeto)
        socket.emit('enviarMovimientoElegido', { datos: JSON.stringify(nuevoObjeto) });

    }

    function remplazarPokemonPropio(i) {
        console.log(i);  // This causes the error
        let nuevoObjeto = { ...datosLocales };
        nuevoObjeto.pokemon = (equipoPropio[i]);
        setPokemonPropio(equipoPropio[i]);
        console.log(setPokemonPropio);
        setDatosLocales(nuevoObjeto);
        socket.emit('remplazarPokemon', { pokemon: JSON.stringify(equipoPropio[i]) });
    }

    /*function actualizarPokemonPropio() {
        let nuevoObjeto = {}
        let nuevoArray = [].concat(equipoPropio)
        if (pokemonPropio != "") {
            nuevoObjeto = {...pokemonPropio}
            nuevoObjeto.combatiendo = true
            for (let i = 0; i < nuevoArray.length; i++) {
                if (nuevoArray[i] != nuevoObjeto) {
                    nuevoArray[i].combatiendo = false
                }
            }
            setPokemonPropio(nuevoObjeto)
            setEquipoPropio(nuevoArray)
            setCoco(coco + 1)
        }

    }*/

    /*useEffect(() => {
        actualizarPokemonPropio()

    }, [pokemonPropio])*/

    function batallaTerminada() {
        return <h3>holas</h3>
    }

    useEffect(() => {
        batallaTerminada()
    }, [ganador])

    function volverAlLobby(event) {
        router.push('/teamBuilder')
    }

    return (
        <>
            {empezarCombate == false
                ? <>
                    {pokemonPropio == ""
                        ? <>
                            <div style={{ display: true, width: "100vw", position: "absolute", zIndex: "1", backgroundColor: "rgb(51,102,175, 0.7)", minHeight: "100vh", justifyContent: "center", alignContent: "center", top: "0", bottom: "0" }}>
                                <div style={{ width: "100%", alignContent: "center", justifyContent: "center", display: "flex" }}>
                                    <h1>Elige tu primer Pokemon</h1>
                                    <p style={{ paddingTop: "5%" }}></p>
                                </div>
                                <div style={{ width: "auto", display: "inline-flex", }}>
                                    {equipoValidado.map((pokemon, i) => (
                                        <div key={i}>
                                            <PrimerPokemon Pokemon={pokemon.form.spriteFront} valor={i} Funcion={seleccionarPokemonInicial}></PrimerPokemon>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                        : <>
                            <p>Esperá a que el otro jugador elija su pokemon</p>
                        </>
                    }
                </>
                : <>
                    <PopUp abrirse={ganador != ""} text={"saory"} funcion={volverAlLobby}></PopUp>
                    <div className="fondo6" style={{ backgroundColor: "gray" }}>
                        <div style={{ width: "100%", display: "grid", backgroundColor: "gray" }}>
                            <div style={{ width: "100%", display: "inline-flex", backgroundColor: "gray" }}>
                                <div className="fondoCombate">
                                    <div style={{ width: "100%", paddingLeft: "9%" }}>
                                        <div style={{ width: "70%" }}>
                                            <p style={{ paddingTop: "45%" }}></p>
                                            {/*EL POKEMON DEL OTRO*/}
                                            <PokemonesCombate nombrePokemon={pokemonPropio.apodo} vidaRestante={pokemonPropio.life} vidaPokemon={pokemonPropio.stats[0]} imagenPokemon={pokemonPropio.form.spriteBack}></PokemonesCombate>
                                        </div>
                                    </div>
                                    <div style={{ width: "80%" }}>
                                        <div style={{ width: "100%", paddingLeft: "30%", paddingTop: "10%" }}>
                                            {/*TU POKEMON*/}
                                            <PokemonesCombate nombrePokemon={pokemonAjeno.apodo} vidaRestante={pokemonAjeno.life} vidaPokemon={pokemonAjeno.stats[0]} imagenPokemon={pokemonAjeno.form.spriteFront}></PokemonesCombate>
                                        </div>
                                    </div>
                                </div>
                                <div className="scrollbarComentarios">
                                    <div style={{ paddingLeft: "1%", paddingTop: "1%", paddingBottom: "1%", backgroundColor: "gray" }}>
                                        <div style={{ backgroundColor: "#dae5f0" }}>
                                            {informe.map((noticia, i) => (
                                                <Comentario texto={noticia}></Comentario>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "100%", display: "inline-flex", backgroundColor: "gray" }}>
                                {pokemonPropio.isDefeated == true || pokemonAjeno.isDefeated == true
                                    ? <>
                                        {pokemonPropio.isDefeated == true
                                            ? <>
                                                {
                                                    equipoPropio.map((pokemon, i) => (
                                                        <div key={i}>
                                                            <PokemonesCambio valor={i} funcion={remplazarPokemonPropio} NombrePokemon={equipoPropio[i].apodo} VidaTotal={equipoPropio[i].stats[0]} VidaRestante={equipoPropio[i].life} PokemonCambio={pokemon.form.spriteFront} desabilitado={(pokemon.isDefeated == true)}></PokemonesCambio>
                                                        </div>
                                                    ))
                                                }
                                            </>
                                            : <>
                                                <p>Esperando al otro jugador</p>
                                            </>
                                        }
                                    </>
                                    : <>
                                        <div className="fondo5">
                                            {datosLocales.turno == ""
                                                ? <><div style={{ width: "100%", display: "inline-flex", paddingTop: "3%", paddingBottom: "3%", paddingLeft: "3%", paddingRight: "3%" }}>
                                                    <Movimientos funcion={seleccionarAtaquePropio} nombre={moves[pokemonPropio.moves[0]].name} valor={0} desabilitado={pokemonPropio.pps[0] == 0}></Movimientos>
                                                    <p style={{ width: "5%" }}></p>
                                                    <Movimientos funcion={seleccionarAtaquePropio} nombre={moves[pokemonPropio.moves[1]].name} valor={1} desabilitado={pokemonPropio.pps[1] == 0}></Movimientos>
                                                </div>
                                                    <div style={{ width: "100%", display: "inline-flex", paddingTop: "3%", paddingBottom: "3%", paddingLeft: "3%", paddingRight: "3%" }}>
                                                        <Movimientos funcion={seleccionarAtaquePropio} nombre={moves[pokemonPropio.moves[2]].name} valor={2} desabilitado={pokemonPropio.pps[2] == 0}></Movimientos>
                                                        <p style={{ width: "5%" }}></p>
                                                        <Movimientos funcion={seleccionarAtaquePropio} nombre={moves[pokemonPropio.moves[3]].name} valor={3} desabilitado={pokemonPropio.pps[3] == 0}></Movimientos>
                                                    </div></>
                                                : <p>Esperando al otro jugador</p>
                                            }
                                        </div>
                                        <div style={{ width: "37%", display: "grid", paddingTop: "1%", paddingLeft: "7%" }}>
                                            <div>
                                                {equipoPropio.map((pokemon, i) => (
                                                    <div key={i}>
                                                        <PokemonesCambio valor={i} funcion={setPokemonACambiarPropioF} NombrePokemon={equipoPropio[i].apodo} VidaTotal={equipoPropio[i].stats[0]} VidaRestante={equipoPropio[i].life} PokemonCambio={pokemon.form.spriteFront} desabilitado={(pokemon.id == pokemonPropio.id || pokemon.isDefeated == true)}></PokemonesCambio>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                }

                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}