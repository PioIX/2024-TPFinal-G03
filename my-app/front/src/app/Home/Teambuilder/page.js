"use client"
import Equipospokemon from "./Equipospokemon";
import { useRouter } from 'next/navigation'

import Image from 'next/image'
import { useState } from "react";
import Pokemon from "./Pokemon";

export default function Teambuilder() {

    let[div1, setdiv1] = useState('grid')
    let[div2, setdiv2] = useState('none')
    function editarEquipo(){
        if (div1 == 'grid'){
            setdiv1('none')
            setdiv2('grid')
        } else {
            setdiv1('grid')
            setdiv2('none')
        }
    }
    return ( 
        <div className='fondo3'>
            <div className='display'  style={{display:div1}}>
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
                    pokemon4={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4g5VJEmrxMIP33ev5h8gevlFeNDwYFZ-Fg&s"}
                    pokemon5={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbOm88aA0zUfU6Jy0NFSR5QA9nk8cdg8f6g&s"}
                    pokemon6={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGzshcmB_0wUWKFt2WdCSF-eaTk9tEiiMsw&s"}
                    editarEquipo = {editarEquipo}
                    >
                    </Equipospokemon>
                    <Equipospokemon nombreEquipo={"rgbyiu"} 
                    pokemon1={"https://cl2.buscafs.com/www.levelup.com/public/uploads/images/875285/875285.jpg"}
                    pokemon2={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFnDxVMJ4uU5bKxIqDbCKrC9ee93h55Fa_Q&s"}
                    pokemon3={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dmPIuElf3Clj2-ND4-t3nHwpuN4uB1vCZw&s"}
                    pokemon4={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4g5VJEmrxMIP33ev5h8gevlFeNDwYFZ-Fg&s"}
                    pokemon5={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbOm88aA0zUfU6Jy0NFSR5QA9nk8cdg8f6g&s"}
                    pokemon6={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGzshcmB_0wUWKFt2WdCSF-eaTk9tEiiMsw&s"}
                    editarEquipo = {editarEquipo}
                    ></Equipospokemon>
                    <Equipospokemon nombreEquipo={"rgbyiu"} 
                    pokemon1={"https://cl2.buscafs.com/www.levelup.com/public/uploads/images/875285/875285.jpg"}
                    pokemon2={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFnDxVMJ4uU5bKxIqDbCKrC9ee93h55Fa_Q&s"}
                    pokemon3={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dmPIuElf3Clj2-ND4-t3nHwpuN4uB1vCZw&s"}
                    pokemon4={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4g5VJEmrxMIP33ev5h8gevlFeNDwYFZ-Fg&s"}
                    pokemon5={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbOm88aA0zUfU6Jy0NFSR5QA9nk8cdg8f6g&s"}
                    pokemon6={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGzshcmB_0wUWKFt2WdCSF-eaTk9tEiiMsw&s"}
                    editarEquipo = {editarEquipo}
                    ></Equipospokemon>
                </div>  
                <div style={{width:"100%", justifyContent:"right", display:"flex", paddingRight:"2%"}}>
                    <button className="botonCombate">¡combate!</button>
                </div>
            </div>
            <div className='display'  style={{display:div2}}>
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
                        <Pokemon imagenPokemon={"https://i.redd.it/pszg1zowqm7b1.gif"}
                        pokemon="isaac"></Pokemon>
                        <Pokemon imagenPokemon={"https://i.redd.it/pszg1zowqm7b1.gif"}
                        pokemon="isaac"></Pokemon>
                        <Pokemon imagenPokemon={"https://i.redd.it/pszg1zowqm7b1.gif"}
                        pokemon="isaac"></Pokemon>
                        <Pokemon imagenPokemon={"https://i.redd.it/pszg1zowqm7b1.gif"}
                        pokemon="isaac"></Pokemon>
                        <Pokemon imagenPokemon={"https://i.redd.it/pszg1zowqm7b1.gif"}
                        pokemon="isaac"></Pokemon>
                        <Pokemon imagenPokemon={"https://i.redd.it/pszg1zowqm7b1.gif"}
                        pokemon="isaac"></Pokemon>
                    </div>
                </div>
            </div>
        </div>
    )
}