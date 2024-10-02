"use client"
import './styles.css'
import Image from 'next/image'

const imageLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}  

export default function PaginaLoginRegistro(){
    return(
        <div className='fondo1'>
            <div>
                <Image 
                    loader={imageLoader}
                    src="/pokemonLogo.jpg"
                    width={640}
                    height={235}
                    alt='hols'
                /> 
                <div>
                    <p>hola</p>
                </div>
            </div>
        </div>
    )
}