"use client"
// COMPONENTES Y ESTILOS
import Equipospokemon from "./Equipospokemon";
import Image from 'next/image'
import Pokemon from "./Pokemon";
// FUNCIONES
import { Pokemon, pokemons } from "@/clases/Pokemon"
import { pokemonForms, PokemonForm } from "@/clases/PokemonForm"
import { damageCalculate, tirarMoneda, turno, descargarPokemons, descargarPokemonsBaseDeDatos, descargarMovimientos, pureba, comprobarMovsRepetidos, comprobarApodo, comprobarPokemones, comprobarEvs } from "@/funciones/funciones";
import { useState, useEffect } from "react"
import CreadorPokemon from "@/componentes/creadorPokemon"
import { useRouter } from 'next/navigation'
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
        router.push('/Home/PaginaCombate')
    }
    // ------------------------- FIN Cosas del html ---------------
    // ------------------------- FUNCIONALIDADES ---------------
    let [equipo, setEquipo] = useState(["", pokemonForms[1], pokemonForms[3], pokemonForms[4], pokemonForms[5], pokemonForms[6]])
    let [apodosEquipo, setApodosEquipos] = useState(["raul", "uwu", "skibidi", "Raul2", "Raulito3", "Simon"])
    let [evsEquipo, setEvsEquipo] = useState([[252, 0, 252, 0, 0, 0], [252, 252, 0, 0, 0, 0], [252, 0, 252, 0, 0, 0], [252, 0, 0, 252, 0, 0], [0, 252, 0, 0, 0, 252], [0, 252, 0, 0, 0, 252]])
    let [statEquipo, setStatEquipo] = useState([[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]])
    let [movsEquipo, setMovsEquipo] = useState([[0, 1, 2, 4], [0, 1, 2, 4], [0, 1, 2, 4], [0, 1, 2, 4], [0, 1, 2, 4], [0, 1, 2, 4]])
    const [id, setId] = useState(0)
    const router = useRouter()

    useEffect(() => {
        descargarPokemonsBaseDeDatos().then((listaFormasPokemon) => {
            let nuevoArray = [].concat(equipo)
            for (let i = 0; i < equipo.length; i++) {
                nuevoArray[i] = pokemonForms[0]
                setEquipo(nuevoArray)
            }
        })
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
        while (mientras == true && check == true) {
            for (let i = 0; i < equipo.length; i++) {
                check = comprobarApodo(apodosEquipo[i], i)
                check = comprobarMovsRepetidos(movsEquipo[i], i)
                check = comprobarPokemones(equipo[i])
                check = comprobarEvs(evsEquipo[i], i)
            }
            x++
            if (x < equipo.length) {
                mientras = false
            }
        }
        if (check == true) {
            console.log("Equipo validado")
            console.log(movsEquipo[0])
            for (let i = 0; i < equipo.length; i++) {
                equipoValidado.push(new Pokemon(equipo[i], movsEquipo[i], evsEquipo[i], apodosEquipo[i], idUser))
            }
            console.log(equipoValidado)
            router.push("/")
        }
        else {
            console.log("Toda la noche está contando oveja")
        }
    }

    return (
        <div className="fondo4">
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
                        pokemon1={"https://cl2.buscafs.com/www.levelup.com/public/uploads/images/875285/875285.jpg"}
                        pokemon2={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFnDxVMJ4uU5bKxIqDbCKrC9ee93h55Fa_Q&s"}
                        pokemon3={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dmPIuElf3Clj2-ND4-t3nHwpuN4uB1vCZw&s"}
                        pokemon4={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnXwziEuZxrCu1fUMAnkr7wcFcf-Vg8pBlw&s"}
                        pokemon5={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbOm88aA0zUfU6Jy0NFSR5QA9nk8cdg8f6g&s"}
                        pokemon6={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGzshcmB_0wUWKFt2WdCSF-eaTk9tEiiMsw&s"}
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
                        <Pokemon imagenPokemon={"https://preview.redd.it/my-collection-of-isaac-dancing-gifs-v0-kgegurof1pe81.gif?width=168&auto=webp&s=7f8c0f694cdf55ca5c7eaa624720e23945ff641f"}
                            pokemon="isaac"></Pokemon>
                        <Pokemon imagenPokemon={"https://preview.redd.it/my-collection-of-isaac-dancing-gifs-v0-kgegurof1pe81.gif?width=168&auto=webp&s=7f8c0f694cdf55ca5c7eaa624720e23945ff641f"}
                            pokemon="isaac"></Pokemon>
                        <Pokemon imagenPokemon={"https://preview.redd.it/my-collection-of-isaac-dancing-gifs-v0-kgegurof1pe81.gif?width=168&auto=webp&s=7f8c0f694cdf55ca5c7eaa624720e23945ff641f"}
                            pokemon="isaac"></Pokemon>
                        <Pokemon imagenPokemon={"https://preview.redd.it/my-collection-of-isaac-dancing-gifs-v0-kgegurof1pe81.gif?width=168&auto=webp&s=7f8c0f694cdf55ca5c7eaa624720e23945ff641f"}
                            pokemon="isaac"></Pokemon>
                        <Pokemon imagenPokemon={"https://preview.redd.it/my-collection-of-isaac-dancing-gifs-v0-kgegurof1pe81.gif?width=168&auto=webp&s=7f8c0f694cdf55ca5c7eaa624720e23945ff641f"}
                            pokemon="isaac"></Pokemon>
                        <Pokemon imagenPokemon={"https://preview.redd.it/my-collection-of-isaac-dancing-gifs-v0-kgegurof1pe81.gif?width=168&auto=webp&s=7f8c0f694cdf55ca5c7eaa624720e23945ff641f"}
                            pokemon="isaac"></Pokemon>
                    </div>
                </div>
            </div>
        </div>
    )
}