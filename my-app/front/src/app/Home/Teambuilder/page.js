"use client"
import Pokemon from "./Pokemon";
import { useRouter } from 'next/navigation'

import Image from 'next/image'

export default function Home() {
    return ( 
        <div className='fondo3'>
            <div className='display'>
                <Image 
                    src="/imagenes/pokemonLogo.png"
                    width={280}
                    height={100} 
                    alt='hols'
                /> 
                <h4 className='subtitulo2'>Chowdawn</h4>         
                <div>
                    <Pokemon></Pokemon>
                </div>  
            </div>
        </div>
    )
}