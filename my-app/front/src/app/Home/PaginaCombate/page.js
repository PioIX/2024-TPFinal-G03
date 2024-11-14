"use client"

import { useEffect, useState } from "react"
import '@/app/Home/styles.css'
import Movimientos from "./Movimientos"
import PokemonesCombate from "./PokemonesCombate"
import PokemonesCambio from "./PokemonesCambio"
import PrimerPokemon from "./SeleccionPokemonInicial"
import Comentario from "./Comentario"

export default function PaginaCombate(){
    let [vidaRestante1, setVidarestante1] = useState(500)
    let [vidaTotal1, setVidaTotal1] = useState(1000)
    let [textoFinal1, setTextoFinal1] = useState("ganaste")
    let [textoFinal2, setTextoFina2] = useState("perdiste")
    const [seccion1, setSeccion1] = useState("grid")
    const [seccion2, setSeccion2] = useState("none")
    const [seccion3, setSeccion3] = useState("none")

    function cambiarSecciones(){
        if (seccion1 == "grid"){
            setSeccion1("none")
            setSeccion2("grid")
        } else if(seccion2 == "none"){
            setSeccion2("none")
            setSeccion3("grid")
        }   
    }

    return(
        <div className="fondo6" style={{backgroundColor:"gray"}}>
            <div style={{width:"100%", display:seccion2, backgroundColor:"gray"}}>
                <div style={{width:"100%", display:"inline-flex", backgroundColor:"gray"}}>
                    <div className="fondoCombate">
                        <div style={{width:"100%", paddingLeft:"9%"}}>
                            <div style={{width:"70%"}}>
                                <p style={{paddingTop:"45%"}}></p>
                                <PokemonesCombate nombrePokemon="fg" vidaRestante={vidaRestante1} vidaPokemon={vidaTotal1} imagenPokemon={"https://preview.redd.it/my-collection-of-isaac-dancing-gifs-v0-kgegurof1pe81.gif?width=168&auto=webp&s=7f8c0f694cdf55ca5c7eaa624720e23945ff641f"}></PokemonesCombate>                                                    
                            </div>
                        </div>
                        <div style={{width:"80%"}}>
                            <div style={{width:"100%", paddingLeft:"30%", paddingTop:"10%"}}>
                                <PokemonesCombate nombrePokemon="fg" vidaRestante={vidaRestante1} vidaPokemon={vidaTotal1} imagenPokemon={"https://preview.redd.it/my-collection-of-isaac-dancing-gifs-v0-kgegurof1pe81.gif?width=168&auto=webp&s=7f8c0f694cdf55ca5c7eaa624720e23945ff641f"}></PokemonesCombate>                                                    
                            </div>
                        </div>
                    </div>
                    <div className="scrollbarComentarios">
                        <div style={{paddingLeft:"1%", paddingTop:"1%", paddingBottom:"1%", backgroundColor:"gray"}}>
                            <div style={{backgroundColor:"#dae5f0"}}>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>
                                <Comentario PokemonEnemigo="fg" Movimiento="gritar"></Comentario>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width:"100%", display:"inline-flex", backgroundColor: "gray"}}>
                    <div className="fondo5">
                        <div style={{width:"100%", display:"inline-flex", paddingTop:"3%", paddingBottom:"3%", paddingLeft:"3%", paddingRight:"3%"}}>
                            <Movimientos></Movimientos>
                            <p style={{width:"5%"}}></p>
                            <Movimientos></Movimientos>
                        </div>
                        <div style={{width:"100%", display:"inline-flex", paddingTop:"3%", paddingBottom:"3%", paddingLeft:"3%", paddingRight:"3%"}}>
                            <Movimientos></Movimientos>
                            <p style={{width:"5%"}}></p>
                            <Movimientos></Movimientos>
                        </div>
                    </div>
                    <div style={{width:"37%", display:"grid", paddingTop:"1%", paddingLeft:"7%"}}>
                        <div>
                            <div style={{width:"100%", display:"inline-flex", paddingTop:"3%", paddingBottom:"3%", paddingLeft:"3%", paddingRight:"3%"}}>
                                <PokemonesCambio NombrePokemon="sdfbnj" vidaPokemon={vidaTotal1} vidaRestante={vidaRestante1} PokemonCambio="https://i.redd.it/b4tjxrof1pe81.gif"></PokemonesCambio>
                                <p style={{width:"5%"}}></p>
                                <PokemonesCambio NombrePokemon="sdfbnj" vidaPokemon={vidaTotal1} vidaRestante={vidaRestante1} PokemonCambio="https://i.redd.it/2dye1fpf1pe81.gif"></PokemonesCambio>
                            </div>
                            <div style={{width:"100%", display:"inline-flex", paddingTop:"3%", paddingBottom:"3%", paddingLeft:"3%", paddingRight:"3%"}}>
                                <PokemonesCambio NombrePokemon="sdfbnj" vidaPokemon={vidaTotal1} vidaRestante={vidaRestante1} PokemonCambio="https://i.redd.it/rq61yrof1pe81.gif"></PokemonesCambio>
                                <p style={{width:"5%"}}></p>
                                <PokemonesCambio NombrePokemon="sdfbnj" vidaPokemon={vidaTotal1} vidaRestante={vidaRestante1} PokemonCambio="https://i.redd.it/z24twzof1pe81.gif"></PokemonesCambio>
                            </div>
                            <div style={{width:"100%", display:"inline-flex", paddingTop:"3%", paddingBottom:"3%", paddingLeft:"3%", paddingRight:"3%"}}>
                                <PokemonesCambio NombrePokemon="sdfbnj" vidaPokemon={vidaTotal1} vidaRestante={vidaRestante1} PokemonCambio="https://i.redd.it/6z1y41pf1pe81.gif"></PokemonesCambio>
                                <p style={{width:"5%"}}></p>
                                <PokemonesCambio NombrePokemon="sdfbnj" vidaPokemon={vidaTotal1} vidaRestante={vidaRestante1} PokemonCambio="https://i.redd.it/so36fsof1pe81.gif"></PokemonesCambio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display:seccion3, width:"100vw", position:"absolute", zIndex:"1", visibility:"", backgroundColor:"rgb(51,102,175, 0.7)", minHeight:"100vh", justifyContent:"center", alignContent:"center", top:"0", bottom:"0"}}>
                <h1 style={{height:"auto", paddingTop:"15%", textAlign:"center"}}><b>{textoFinal1}</b></h1>
                <h2 style={{paddingTop:"5%"}}></h2>
                <button style={{fontSize:"200%", backgroundColor:"aqua", border:"0", boxShadow:"black 0.2em 0.2em", borderRadius: "80px", padding:"5px"}}>volver al inicio</button>
            </div>
            <div style={{display:seccion1, width:"100vw", position:"absolute", zIndex:"1", backgroundColor:"rgb(51,102,175, 0.7)", minHeight:"100vh", justifyContent:"center", alignContent:"center", top:"0", bottom:"0"}}>
                <div style={{width:"100%", alignContent:"center", justifyContent:"center", display:"flex"}}>
                    <h1>Elige tu primer Pokemon</h1>
                    <p style={{paddingTop:"5%"}}></p>
                </div>
                <div style={{width:"auto", display:"inline-flex", }}>
                    <PrimerPokemon Pokemon="https://i.redd.it/kgegurof1pe81.gif" Funcion={cambiarSecciones}></PrimerPokemon>
                    <PrimerPokemon Pokemon="https://i.redd.it/kgegurof1pe81.gif" Funcion={cambiarSecciones}></PrimerPokemon>
                    <PrimerPokemon Pokemon="https://i.redd.it/kgegurof1pe81.gif" Funcion={cambiarSecciones}></PrimerPokemon>
                    <PrimerPokemon Pokemon="https://i.redd.it/kgegurof1pe81.gif" Funcion={cambiarSecciones}></PrimerPokemon>
                    <PrimerPokemon Pokemon="https://i.redd.it/kgegurof1pe81.gif" Funcion={cambiarSecciones}></PrimerPokemon>
                    <PrimerPokemon Pokemon="https://i.redd.it/kgegurof1pe81.gif" Funcion={cambiarSecciones}></PrimerPokemon>
                </div>
            </div>
        </div>
    )
}