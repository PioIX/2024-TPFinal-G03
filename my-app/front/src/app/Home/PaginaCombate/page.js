"use client"

import { useState } from "react"
import '@/app/Home/styles.css'
import Movimientos from "./Movimientos"
import PokemonesCombate from "./PokemonesCombate"
import PokemonesCambio from "./PokemonesCambio"
import Comentario from "./Comentario"

export default function PaginaCombate(){
    let [vidaRestante1, setVidarestante1] = useState(500)
    let [vidaTotal1, setVidaTotal1] = useState(1000)

    return(
        <div className="fondo6">
            <div style={{width:"100%", display:"grid"}}>
                <div style={{width:"100%", display:"inline-flex"}}>
                    <div className="fondoCombate">
                        <div style={{width:"100%", paddingLeft:"9%"}}>
                            <div style={{width:"70%"}}>
                                <p style={{paddingTop:"70%"}}></p>
                                <PokemonesCombate nombrePokemon="me pica el pene" vidaRestante={vidaRestante1} vidaPokemon={vidaTotal1} imagenPokemon={"https://preview.redd.it/my-collection-of-isaac-dancing-gifs-v0-kgegurof1pe81.gif?width=168&auto=webp&s=7f8c0f694cdf55ca5c7eaa624720e23945ff641f"}></PokemonesCombate>                                                    
                            </div>
                        </div>
                        <div style={{width:"80%"}}>
                            <div style={{width:"100%", paddingLeft:"30%", paddingTop:"10%"}}>
                                <PokemonesCombate nombrePokemon="me pica el pene" vidaRestante={vidaRestante1} vidaPokemon={vidaTotal1} imagenPokemon={"https://preview.redd.it/my-collection-of-isaac-dancing-gifs-v0-kgegurof1pe81.gif?width=168&auto=webp&s=7f8c0f694cdf55ca5c7eaa624720e23945ff641f"}></PokemonesCombate>                                                    
                            </div>
                        </div>
                    </div>
                    <div style={{width:"40%", backgroundColor:"gray"}}>
                        <Comentario PokemonEnemigo="me pica el pene" Movimiento="gritar"></Comentario>
                    </div>
                </div>
                <div style={{width:"100%", display:"inline-flex", backgroundColor: "gray", borderRadius: "80px"}}>
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
                                <PokemonesCambio NombrePokemon="sdfbnj" VidaTotal={vidaTotal1} VidaRestante={vidaRestante1} PokemonCambio="https://i.redd.it/b4tjxrof1pe81.gif"></PokemonesCambio>
                                <p style={{width:"5%"}}></p>
                                <PokemonesCambio NombrePokemon="sdfbnj" VidaTotal={vidaTotal1} VidaRestante={vidaRestante1} PokemonCambio="https://i.redd.it/2dye1fpf1pe81.gif"></PokemonesCambio>
                            </div>
                            <div style={{width:"100%", display:"inline-flex", paddingTop:"3%", paddingBottom:"3%", paddingLeft:"3%", paddingRight:"3%"}}>
                                <PokemonesCambio NombrePokemon="sdfbnj" VidaTotal={vidaTotal1} VidaRestante={vidaRestante1} PokemonCambio="https://i.redd.it/rq61yrof1pe81.gif"></PokemonesCambio>
                                <p style={{width:"5%"}}></p>
                                <PokemonesCambio NombrePokemon="sdfbnj" VidaTotal={vidaTotal1} VidaRestante={vidaRestante1} PokemonCambio="https://i.redd.it/z24twzof1pe81.gif"></PokemonesCambio>
                            </div>
                            <div style={{width:"100%", display:"inline-flex", paddingTop:"3%", paddingBottom:"3%", paddingLeft:"3%", paddingRight:"3%"}}>
                                <PokemonesCambio NombrePokemon="sdfbnj" VidaTotal={vidaTotal1} VidaRestante={vidaRestante1} PokemonCambio="https://i.redd.it/6z1y41pf1pe81.gif"></PokemonesCambio>
                                <p style={{width:"5%"}}></p>
                                <PokemonesCambio NombrePokemon="sdfbnj" VidaTotal={vidaTotal1} VidaRestante={vidaRestante1} PokemonCambio="https://i.redd.it/so36fsof1pe81.gif"></PokemonesCambio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}