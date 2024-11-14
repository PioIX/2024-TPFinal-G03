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
        router.push('/paginaCombate')
    }
    // ------------------------- FIN Cosas del html ---------------
    // ------------------------- FUNCIONALIDADES ---------------
    let [equipo, setEquipo] = useState(["", pokemonForms[1], pokemonForms[3], pokemonForms[4], pokemonForms[5], pokemonForms[6]])
    let [apodosEquipo, setApodosEquipos] = useState(["raul", "uwu", "skibidi", "Raul2", "Raulito3", "Simon"])
    let [evsEquipo, setEvsEquipo] = useState([[252, 0, 252, 0, 0, 0], [252, 252, 0, 0, 0, 0], [252, 0, 252, 0, 0, 0], [252, 0, 0, 252, 0, 0], [0, 252, 0, 0, 0, 252], [0, 252, 0, 0, 0, 252]])
    let [statEquipo, setStatEquipo] = useState([[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]])
    let [movsEquipo, setMovsEquipo] = useState([[0, 1, 2, 4], [0, 1, 2, 4], [0, 1, 2, 4], [0, 1, 2, 4], [0, 1, 2, 4], [0, 1, 2, 4]])
    const router = useRouter()

    useEffect(() => {
        descargarPokemonsBaseDeDatos().then((listaFormasPokemon) => {
            let nuevoArray = [].concat(equipo)
            for (let i = 0; i < equipo.length; i++) {
                nuevoArray[i] = pokemonForms[5]
                setEquipo(nuevoArray)
            }
        })
        if (id == 0.2) {
            idUser = idRegister
        }
        else {
            idUser = id
        }
        console.log(idUser)
    }, [])


    function selectId(event) {
        idUser = event.target.value
    }

    function registrarApodo(event, id) {
        let nuevoArrayApodo = [].concat(apodosEquipo)
        nuevoArrayApodo[id] = event.target.value
        setApodosEquipos(nuevoArrayApodo)


    }

    function registrarMov1(event, id) {
        let nuevoArray = [].concat(movsEquipo)
        nuevoArray[id][event.target.id] = (event.target.value)
        setMovsEquipo(nuevoArray)

    }

    function seleccionarPokemon1(event, id) {
        let nuevoArrayEquipo = [].concat(equipo)
        let nuevoArrayApodo = [].concat(apodosEquipo)
        let nuevoArrayStats = [].concat(statEquipo)
        nuevoArrayEquipo[id] = pokemonForms[event.target.value]
        setEquipo(nuevoArrayEquipo)
        nuevoArrayApodo[id] = pokemonForms[event.target.value].name
        setApodosEquipos(nuevoArrayApodo)
        for (let i = 0; i < statEquipo[id].length; i++) {

            if (i == 0) {
                console.log(id)
                nuevoArrayStats[id][i] = Math.round((100 / 100 * ((pokemonForms[event.target.value].baseStats[i] * 2) + 31 + evsEquipo[id][i] / 4)) + 100 + 10)

            }
            else {
                nuevoArrayStats[id][i] = Math.round(5 + (100 / 100 * ((pokemonForms[event.target.value].baseStats[i] * 2) + 31 + evsEquipo[id][i] / 4)))

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
    }

    function validar() {
        let check = true
        let mientras = true
        let x = 0
        for (let i = 0; i < equipo.length; i++) {
            if (check == true) {
                check = comprobarApodo(apodosEquipo[i], i)
                check = comprobarMovsRepetidos(movsEquipo[i], i)
                check = comprobarPokemones(equipo[i])
                check = comprobarEvs(evsEquipo[i], i)
            }
            /*console.log(apodosEquipo[i])
            console.log(movsEquipo[i])
            console.log(equipo[i])
            console.log(evsEquipo[i])*/
        }

        if (check == true) {
            console.log("Equipo validado")
            console.log(movsEquipo[0])
            for (let i = 0; i < equipo.length; i++) {
                equipoValidado.push(new Pokemon(equipo[i], movsEquipo[i], evsEquipo[i], apodosEquipo[i], idUser))
            }
            console.log(equipoValidado)
        }
        else {
            console.log("Toda la noche está contando oveja")
        }
    }

    return (
        <>
            {equipo[0] != ""
                ? <div className="fondo4">
                    <div className='display' style={{ display: div1 }}>
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
                        <div style={{ width: "100%", justifyContent: "right", display: "flex", paddingRight: "2%", paddingBottom: "1%" }}>
                            <button className="botonCombate" onClick={botonCombate}><img style={{ width: "90%" }} src="https://img.icons8.com/?size=100&id=63311&format=png&color=000000"></img></button>
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
                                <button className="botonVolverAtras" onClick={editarEquipo}> ←volver atras</button>
                                <button className="botonVolverAtras" onClick={validar}>validar</button>
                                <PokemonComponente
                                    imagenPokemon={equipo[0].spriteFront}
                                    pokemonName={apodosEquipo[0]} lista={pokemonForms} id={0} pokemon={equipo[0]} funcionNickname={registrarApodo}
                                    funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[0]} funcionEvs={obtenerEvs} statPokemon={statEquipo[0]}
                                ></PokemonComponente>
                                <PokemonComponente
                                    imagenPokemon={equipo[1].spriteFront}
                                    pokemonName={apodosEquipo[1]} lista={pokemonForms} id={1} pokemon={equipo[1]} funcionNickname={registrarApodo}
                                    funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[1]} funcionEvs={obtenerEvs} statPokemon={statEquipo[1]}
                                ></PokemonComponente>
                                <PokemonComponente
                                    imagenPokemon={equipo[2].spriteFront}
                                    pokemonName={apodosEquipo[2]} lista={pokemonForms} id={2} pokemon={equipo[2]} funcionNickname={registrarApodo}
                                    funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[2]} funcionEvs={obtenerEvs} statPokemon={statEquipo[2]}
                                ></PokemonComponente>
                                <PokemonComponente
                                    imagenPokemon={equipo[3].spriteFront}
                                    pokemonName={apodosEquipo[3]} lista={pokemonForms} id={3} pokemon={equipo[3]} funcionNickname={registrarApodo}
                                    funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[3]} funcionEvs={obtenerEvs} statPokemon={statEquipo[3]}
                                ></PokemonComponente>
                                <PokemonComponente
                                    imagenPokemon={equipo[4].spriteFront}
                                    pokemonName={apodosEquipo[4]} lista={pokemonForms} id={4} pokemon={equipo[4]} funcionNickname={registrarApodo}
                                    funcionPokemon={seleccionarPokemon1} funcionMov1={registrarMov1} evsPokemon={evsEquipo[4]} funcionEvs={obtenerEvs} statPokemon={statEquipo[4]}
                                ></PokemonComponente>
                                <PokemonComponente
                                    imagenPokemon={equipo[5].spriteFront}
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