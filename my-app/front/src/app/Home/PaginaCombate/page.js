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
                <div style={{width:"100%", display:"inline-flex", justifyContent:"right"}}>
                    <div style={{width:"20%"}}>
                        <PokemonesCombate vidaRestante={vidaRestante1} vidaPokemon={vidaTotal1} imagenPokemon={"https://preview.redd.it/my-collection-of-isaac-dancing-gifs-v0-kgegurof1pe81.gif?width=168&auto=webp&s=7f8c0f694cdf55ca5c7eaa624720e23945ff641f"}></PokemonesCombate>                        
                    </div>
                    <div style={{width:"40%"}}>
                        <PokemonesCombate vidaRestante={vidaRestante1} vidaPokemon={vidaTotal1} imagenPokemon={"https://preview.redd.it/my-collection-of-isaac-dancing-gifs-v0-kgegurof1pe81.gif?width=168&auto=webp&s=7f8c0f694cdf55ca5c7eaa624720e23945ff641f"}></PokemonesCombate>                        
                    </div>
                    <p style={{width:"5%"}}></p>
                    <div style={{ width:"40%", backgroundColor:"gray"}}>
                        <p>dhuio</p>
                    </div>
                </div>
                    <div style={{width:"100%", backgroundColor:"gray", height:"100%"}}>
                </div>
            </div>
        </div>
    )
}