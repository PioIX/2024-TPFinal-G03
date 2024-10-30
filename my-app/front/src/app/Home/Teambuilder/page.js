"use client"
import Pokemon from "./Pokemon";
import { useRouter } from 'next/navigation'

import Image from 'next/image'
import { useState } from "react";

export default function Home() {

    let[check, setCheck] = useState(true)
    function editarEquipo(){
        setCheck('none')
    }
    return ( 
        <div className='fondo3'>
            <div className='display' style={{display:check}}>
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
                    <Pokemon nombreEquipo={"rgbyiu"} 
                    pokemon1={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon2={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon3={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon4={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon5={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon6={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    editarEquipo = {editarEquipo}
                    >
                    </Pokemon>
                    <Pokemon nombreEquipo={"rgbyiu"} 
                    pokemon1={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon2={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon3={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon4={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon5={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon6={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    ></Pokemon>
                    <Pokemon nombreEquipo={"rgbyiu"} 
                    pokemon1={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon2={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon3={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon4={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon5={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}
                    pokemon6={"https://i.pinimg.com/originals/78/bb/89/78bb891dc2316b6129decc52e728e29b.gif"}></Pokemon>
                </div>  
                <div style={{width:"100%", justifyContent:"right", display:"flex", paddingRight:"2%"}}>
                    <button className="botonCombate">¡combate!</button>
                </div>
            </div>
        </div>
    )
}