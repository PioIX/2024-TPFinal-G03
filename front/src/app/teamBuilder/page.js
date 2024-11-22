"use client"
// COMPONENTES Y ESTILOS
import Equipospokemon from "./Equipospokemon";
import Image from 'next/image'
import PokemonComponente from "./Pokemon";
// FUNCIONES
import { Pokemon, pokemons } from "@/clases/Pokemon"
import { pokemonForms, PokemonForm } from "@/clases/PokemonForm"
import { damageCalculate, tirarMoneda, turno, descargarPokemons, descargarPokemonsBaseDeDatos, descargarMovimientos, pureba, comprobarMovsRepetidos, comprobarApodo, comprobarPokemones, comprobarEvs } from "@/funciones/funciones";
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { id } from "../Logeo/page";
import { idRegister } from "../Registro/page";
export let equipoValidado = []
export let idUser = 0
export let salaElegida = ""


export default function Teambuilder() {

    let [div1, setdiv1] = useState('grid')
    let [div2, setdiv2] = useState('none')

    // ------------------------- Cosas del html ---------------
    function editarEquipo() {
        if (div1 == 'grid') {
            setdiv1('none')
            setdiv2('grid')
        } else {
            setdiv1('grid')
            setdiv2('none')
        }
    }

    function botonCombate() {
        let check = validar()
        if (check) {
            router.push('/paginaCombate')

        }
    }
    // ------------------------- FIN Cosas del html ---------------
    // ------------------------- FUNCIONALIDADES ---------------
    const [equipo, setEquipo] = useState(["", pokemonForms[24], pokemonForms[93], pokemonForms[864], pokemonForms[148], pokemonForms[447]])
    const [apodosEquipo, setApodosEquipos] = useState(["pikachu", "gengar", "sirfetch", "Raul2", "dragonite", "lucario"])
    const [evsEquipo, setEvsEquipo] = useState([[0, 0, 0, 252, 0, 252], [0, 252, 0, 0, 0, 252], [0, 0, 0, 252, 0, 252], [0, 252, 0, 0, 0, 252], [0, 252, 0, 252, 0, 0], [0, 252, 0, 0, 0, 252]])
    const [statEquipo, setStatEquipo] = useState([[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]])
    const [movsEquipo, setMovsEquipo] = useState([[40, 43, 13, 39], [20, 52, 16, 74], [76, 73, 65, 90], [84, 37, 81, 2], [56, 30, 52, 1], [15, 2, 28, 89]])
    const [textoValidar, setTextoValidar] = useState("Si editás a tu equipo, vas a tener que validarlo.")
    const [validacion, setValidacion] = useState(true)
    const [seEligioSala, setSeEligioSala] = useState(false)
    const router = useRouter()

    useEffect(() => {
        let equipoLocal = {}
        let movsLocal = {}
        let evsLocal = {}
        let apodosLocal = {}
        let nuevoArray = [].concat(equipo)
        //PONER AL EQUIPO PREDETERMINADO
        nuevoArray[0] = pokemonForms[24]
        nuevoArray[1] = pokemonForms[864]
        nuevoArray[2] = pokemonForms[93]
        nuevoArray[3] = pokemonForms[148]
        nuevoArray[4] = pokemonForms[447]
        nuevoArray[5] = pokemonForms[881]
        setEquipo(nuevoArray)
        console.log(localStorage.getItem("equipo"))
        if ((localStorage.getItem("equipo")) != null) {
            equipoLocal = JSON.parse(localStorage.getItem("equipo"))
            movsLocal = JSON.parse(localStorage.getItem("movs"))
            evsLocal = JSON.parse(localStorage.getItem("evs"))
            apodosLocal = JSON.parse(localStorage.getItem("apodos"))
            setEquipo(equipoLocal)
            setApodosEquipos(apodosLocal)
            setMovsEquipo(movsLocal)
            setEvsEquipo(evsLocal)
        }
        if (id == 0.2) {
            idUser = idRegister
        }
        else {
            idUser = id
        }
        console.log(idUser)


    }, [])


    useEffect(() => {
        console.log(equipo)
    }, [equipo])

    function selectId(event) {
        idUser = event.target.value
    }

    function registrarApodo(event, id) {
        let nuevoArrayApodo = [].concat(apodosEquipo)
        nuevoArrayApodo[id] = event.target.value
        setApodosEquipos(nuevoArrayApodo)
        setTextoValidar("Se han realizado cambios, es necesario validarlos.")
        setValidacion(false)
    }

    function registrarMov1(event, id) {
        let nuevoArray = [].concat(movsEquipo)
        nuevoArray[id][event.target.id] = (event.target.value)
        setMovsEquipo(nuevoArray)
        setTextoValidar("Se han realizado cambios, es necesario validarlos.")
        setValidacion(false)

    }

    function seleccionarPokemon1(event, id) {
        let nuevoArrayEquipo = [].concat(equipo)
        let nuevoArrayApodo = [].concat(apodosEquipo)
        let nuevoArrayStats = [].concat(statEquipo)
        let nuevosEvs = [].concat(evsEquipo)
        let nuevosMovs = [].concat(movsEquipo)
        nuevosMovs[id] = [6, 7, 8, 9]
        nuevosEvs[id] = [0, 0, 0, 0, 0, 0]
        nuevoArrayEquipo[id] = pokemonForms[event.target.value]
        nuevoArrayApodo[id] = pokemonForms[event.target.value].name
        setMovsEquipo(nuevosMovs)
        setEvsEquipo(nuevosEvs)
        setEquipo(nuevoArrayEquipo)
        setApodosEquipos(nuevoArrayApodo)
        setTextoValidar("Se han realizado cambios, es necesario validarlos.")
        setValidacion(false)
        for (let i = 0; i < statEquipo[id].length; i++) {

            if (i == 0) {
                console.log(id)
                nuevoArrayStats[id][i] = Math.round((100 / 100 * ((pokemonForms[event.target.value].baseStats[i] * 2) + 31 + 0 / 4)) + 100 + 10)

            }
            else {
                nuevoArrayStats[id][i] = Math.round(5 + (100 / 100 * ((pokemonForms[event.target.value].baseStats[i] * 2) + 31 + 0 / 4)))

            }
        }
        setStatEquipo(nuevoArrayStats)

        console.log(nuevoArrayStats)
    }

    function calcularStats(id) {
        let nuevoArray = [].concat(statEquipo)
        if (equipo[id] != "") {
            for (let i = 0; i < statEquipo[id].length; i++) {
                if (i == 0) {
                    nuevoArray[id][i] = Math.round((100 / 100 * ((equipo[id].baseStats[i] * 2) + 31 + evsEquipo[id][i] / 4)) + 100 + 10)
                }
                else {
                    nuevoArray[id][i] = Math.round(5 + (100 / 100 * ((equipo[id].baseStats[i] * 2) + 31 + evsEquipo[id][i] / 4)))
                }
            }
            setStatEquipo(nuevoArray)
        }
        console.log(statEquipo[0])
    }

    function obtenerEvs(event, id) {
        let statId = (event.target.id)
        let evs = parseInt(event.target.value)
        let nuevoArray = [].concat(evsEquipo)
        nuevoArray[id][statId] = evs
        setEvsEquipo(nuevoArray)
        calcularStats(id)
        setTextoValidar("Se han realizado cambios, es necesario validarlos.")
        setValidacion(false)
    }
    // ATENCIÓN!!!!!
    // Actualmente podés elegir un pokemon y luego cambiarlo, por lo que podés tener pokemon ilegales
    // Es un un cambio de QoL de baja prioridad, pero no estoy muy cómodo sabiendo que existe
    // Igual si no lo corregimos y alguien se pone a hacerlo en el dia de la expo, lo felicitaría por el esfuerzo
    // Ya está corregido
    function validar() {
        let checkApodo = true
        let checkMovs = true
        let checkPokemons = true
        let checkEvs = true
        let check = true
        let x = 0
        let listaCheck = [true, true, true, true, "El equipo tiene el siguiente error: "]
        for (let i = 0; i < equipo.length; i++) {
            /*if (checkApodo == true && checkMovs == true && checkPokemons == true && checkEvs == true) {
                checkApodo = comprobarApodo(apodosEquipo[i], i)
                checkMovs = comprobarMovsRepetidos(movsEquipo[i], i)
                checkPokemons = comprobarPokemones(equipo[i])
                checkEvs = comprobarEvs(evsEquipo[i], i)
            }*/
            if (listaCheck[0] == true && listaCheck[1] == true && listaCheck[2] == true && listaCheck[3] == true) {
                listaCheck = comprobarApodo(apodosEquipo[i], i, listaCheck)
                listaCheck = comprobarMovsRepetidos(movsEquipo[i], i, apodosEquipo[i], listaCheck)
                listaCheck = comprobarPokemones(equipo[i], apodosEquipo[i], listaCheck)
                listaCheck = comprobarEvs(evsEquipo[i], apodosEquipo[i], listaCheck)
            }
            /*console.log(apodosEquipo[i])
            console.log(movsEquipo[i])
            console.log(equipo[i])
            console.log(evsEquipo[i])*/
        }
        check = (listaCheck[0] == true && listaCheck[1] == true && listaCheck[2] == true && listaCheck[3] == true)
        if (check == true) {
            console.log("Equipo validado")
            equipoValidado = []
            for (let i = 0; i < equipo.length; i++) {
                equipoValidado.push(new Pokemon(equipo[i], movsEquipo[i], evsEquipo[i], apodosEquipo[i], idUser))
            }
            console.log(equipoValidado)
            setTextoValidar("Equipo validado!")
            setearDatos()
            setValidacion(true)
            return true
        }
        else {
            setTextoValidar(listaCheck[4])
            return false
            console.log("Toda la noche está contando oveja")
            //MEJORAR ESTO DESPUES
        }
    }

    function setearDatos() {
        localStorage.setItem("equipo", JSON.stringify(equipo))
        localStorage.setItem("apodos", JSON.stringify(apodosEquipo))
        localStorage.setItem("movs", JSON.stringify(movsEquipo))
        localStorage.setItem("evs", JSON.stringify(evsEquipo))

    }

    function seleccionarSala(event) {
        salaElegida = event.target.value
        setSeEligioSala(true)
        console.log(salaElegida)
    }

    return (
        <>
            {equipo[0] != ""
                ? <div className="fondo4">
                    <div className='display' style={{ display: div1 }}>
                        <div className="imagenChiquita">
                            <div>
                                <Image
                                    src="/front/src/ap/imagenes/pokemonLogo.png"
                                    width={280}
                                    height={100}
                                    alt='hols'
                                />
                                <h4 className='subtitulo2'>Chowdawn</h4>
                            </div>
                        </div>
                        <div>
                            <Equipospokemon nombreEquipo={"rgbyiu"}
                                pokemon1={equipo[0].spriteFront}
                                pokemon2={equipo[1].spriteFront}
                                pokemon3={equipo[2].spriteFront}
                                pokemon4={equipo[3].spriteFront}
                                pokemon5={equipo[4].spriteFront}
                                pokemon6={equipo[5].spriteFront}
                                editarEquipo={editarEquipo}
                            >
                            </Equipospokemon>
                        </div>
                        <div  style={{ width: "100%", justifyContent: "center", display: "flex", paddingRight: "2%", paddingBottom: "1%" }}>
                                <select className="estiloSelectorMovimiento" onChange={seleccionarSala} style={{height:"20%", width:"30%"}}>
                                    <option selected disabled>Elegir sala</option>
                                    <option value={"CombateNormal"}>Combate contra otro usuario</option>
                                    <option value={"CombateRafta"}>Reto por un rafta</option>
                                </select>
                                <button disabled={!seEligioSala} className="botonCombate" onClick={botonCombate} style={{height:"50%"}}><img style={{ width: "90%" }} src="https://img.icons8.com/?size=100&id=63311&format=png&color=000000"></img></button>
                        </div>
                    </div>
                    <div className='display' style={{ display: div2 }}>
                        <div className="imagenChiquita">
                            <div>
                                <Image
                                    src="/imagenes/pokemonLogo.png"
                                    width={280}
                                    height={100}
                                    alt='hols'
                                />
                                <h4 className='subtitulo2'>Chowdawn</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <button className="botonVolverAtras" onClick={editarEquipo} disabled={!validacion}> ←volver atras</button>
                                <button className="botonVolverAtras" onClick={validar}>validar</button>
                                <h2>{textoValidar}</h2>
                                <PokemonComponente
                                    imagenPokemon={equipo[0].spriteFront} movsDefault={movsEquipo[0]}
                                    pokemonName={apodosEquipo[0]} lista={pokemonForms} id={0} pokemon={equipo[0]} funcionNickname={registrarApodo}
                                    funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[0]} funcionEvs={obtenerEvs} statPokemon={statEquipo[0]}
                                ></PokemonComponente>
                                <PokemonComponente
                                    imagenPokemon={equipo[1].spriteFront} movsDefault={movsEquipo[1]}
                                    pokemonName={apodosEquipo[1]} lista={pokemonForms} id={1} pokemon={equipo[1]} funcionNickname={registrarApodo}
                                    funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[1]} funcionEvs={obtenerEvs} statPokemon={statEquipo[1]}
                                ></PokemonComponente>
                                <PokemonComponente
                                    imagenPokemon={equipo[2].spriteFront} movsDefault={movsEquipo[2]}
                                    pokemonName={apodosEquipo[2]} lista={pokemonForms} id={2} pokemon={equipo[2]} funcionNickname={registrarApodo}
                                    funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[2]} funcionEvs={obtenerEvs} statPokemon={statEquipo[2]}
                                ></PokemonComponente>
                                <PokemonComponente
                                    imagenPokemon={equipo[3].spriteFront} movsDefault={movsEquipo[3]}
                                    pokemonName={apodosEquipo[3]} lista={pokemonForms} id={3} pokemon={equipo[3]} funcionNickname={registrarApodo}
                                    funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[3]} funcionEvs={obtenerEvs} statPokemon={statEquipo[3]}
                                ></PokemonComponente>
                                <PokemonComponente
                                    imagenPokemon={equipo[4].spriteFront} movsDefault={movsEquipo[4]}
                                    pokemonName={apodosEquipo[4]} lista={pokemonForms} id={4} pokemon={equipo[4]} funcionNickname={registrarApodo}
                                    funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[4]} funcionEvs={obtenerEvs} statPokemon={statEquipo[4]}
                                ></PokemonComponente>
                                <PokemonComponente
                                    imagenPokemon={equipo[5].spriteFront} movsDefault={movsEquipo[5]}
                                    pokemonName={apodosEquipo[5]} lista={pokemonForms} id={5} pokemon={equipo[5]} funcionNickname={registrarApodo}
                                    funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[5]} funcionEvs={obtenerEvs} statPokemon={statEquipo[5]}
                                ></PokemonComponente>
                            </div>
                        </div>
                    </div>
                </div>
                : <></>

            }

        </>
    )
}