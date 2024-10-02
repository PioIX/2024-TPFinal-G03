"use client"
import './styles.css'
import Image from 'next/image'


export default function PaginaLoginRegistro(){
    return(
        <div className='fondo1'>
            <div>
                <Image 
                    src="/imagenes/pokemonLogo.png"
                    width={440}
                    height={135}
                    alt='hols'
                /> 
                <div>
                    <p className='subtitulo1'>chowdown!</p>
                </div>
            </div>
        </div>
    )
}