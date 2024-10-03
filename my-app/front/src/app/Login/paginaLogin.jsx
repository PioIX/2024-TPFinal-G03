"use client"
import './styles.css'
import Image from 'next/image'


export default function PaginaLoginRegistro(){
    return(
        <div className='fondo1'>
            <div>
                <Image 
                    style={{paddingLeft:"110px"}}
                    src="/imagenes/pokemonLogo.png"
                    width={680}
                    height={205}
                    alt='hols'
                /> 
                <div>
                    <h4 className='subtitulo1'>Chowdawn</h4>
                    <div className='botonesLogin'>
                        <button className='botonRegistroLogin'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}