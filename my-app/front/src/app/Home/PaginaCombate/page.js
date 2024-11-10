"use client"

import { useState } from "react"
import '@/app/Home/styles.css'
import PokemonesCombate from "./PokemonesCombate"

export default function PaginaCombate(){
    let [vidaRestante1, setVidarestante1] = useState(500)
    let [vidaTotal1, setVidaTotal1] = useState(1000)

    return(
        <div className="fondo3">
            <div style={{width:"100%", display:"grid"}}>
                <div style={{width:"100%", display:"inline-flex"}}>
                    <div style={{width:"100%", display:"inline-flex"}}>
                        <div style={{width:"100%", paddingLeft:"9%"}}>
                            <div style={{width:"70%"}}>
                                <p style={{paddingTop:"50%"}}></p>
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
                        <p>dhuio</p>
                    </div>
                </div>
                <div style={{width:"100%", backgroundColor:"gray"}}>
                </div>
            </div>
        </div>
    )
}