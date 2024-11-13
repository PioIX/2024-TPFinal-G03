"use client"
import Equipospokemon from "./Equipospokemon";
import { useRouter } from 'next/navigation'

import Image from 'next/image'
import { useState } from "react";
import Pokemon from "./Pokemon";

export default function Teambuilder() {
    const router = useRouter()
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

    function botonCombate(){
        router.push('/Home/PaginaCombate')
    }    

    return ( 
        <div className="fondo4">
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
                    pokemon4={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnXwziEuZxrCu1fUMAnkr7wcFcf-Vg8pBlw&s"}
                    pokemon5={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbOm88aA0zUfU6Jy0NFSR5QA9nk8cdg8f6g&s"}
                    pokemon6={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGzshcmB_0wUWKFt2WdCSF-eaTk9tEiiMsw&s"}
                    editarEquipo = {editarEquipo}
                    >
                    </Equipospokemon>
                    <Equipospokemon nombreEquipo={"rgbyiu"} 
                    pokemon1={"https://cl2.buscafs.com/www.levelup.com/public/uploads/images/875285/875285.jpg"}
                    pokemon2={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFnDxVMJ4uU5bKxIqDbCKrC9ee93h55Fa_Q&s"}
                    pokemon3={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dmPIuElf3Clj2-ND4-t3nHwpuN4uB1vCZw&s"}
                    pokemon4={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnXwziEuZxrCu1fUMAnkr7wcFcf-Vg8pBlw&s"}
                    pokemon5={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbOm88aA0zUfU6Jy0NFSR5QA9nk8cdg8f6g&s"}
                    pokemon6={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGzshcmB_0wUWKFt2WdCSF-eaTk9tEiiMsw&s"}
                    editarEquipo = {editarEquipo}
                    ></Equipospokemon>
                    <Equipospokemon nombreEquipo={"rgbyiu"} 
                    pokemon1={"https://cl2.buscafs.com/www.levelup.com/public/uploads/images/875285/875285.jpg"}
                    pokemon2={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFnDxVMJ4uU5bKxIqDbCKrC9ee93h55Fa_Q&s"}
                    pokemon3={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dmPIuElf3Clj2-ND4-t3nHwpuN4uB1vCZw&s"}
                    pokemon4={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnXwziEuZxrCu1fUMAnkr7wcFcf-Vg8pBlw&s"}
                    pokemon5={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbOm88aA0zUfU6Jy0NFSR5QA9nk8cdg8f6g&s"}
                    pokemon6={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGzshcmB_0wUWKFt2WdCSF-eaTk9tEiiMsw&s"}
                    editarEquipo = {editarEquipo}
                    ></Equipospokemon>
                </div>  
                <div style={{width:"100%", justifyContent:"right", display:"flex", paddingRight:"2%", paddingBottom:"1%"}}>
                    <button className="botonCombate" onClick={botonCombate}><img style={{width:"90%"}} src="https://img.icons8.com/?size=100&id=63311&format=png&color=000000"></img></button>
                </div>
            </div>
            <div className='display' style={{display:div2}}>
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