"use client"
import '@/app/Home/styles.css'
import { useRouter } from 'next/navigation'

import Image from 'next/image'

export default function Pokemon(){
    return(
        <div className='fondo3'>
                <div className='display'>
                <Image 
                    src="/imagenes/pokemonLogo.png"
                    width={280}
                    height={100} 
                    alt='hols'
                /> 
                <h4 className='subtitulo2'>Chowdawn</h4>
                <div className='divPokemon'>
                    <h2></h2>
                    <h2>(Nombre pokemon)</h2>
                    <h2>(Pokemon)</h2>
                </div>
            </div>
        </div>
    )
}