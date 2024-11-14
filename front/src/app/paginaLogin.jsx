"use client"
import './styles.css'
import { useRouter } from 'next/navigation'

import Image from 'next/image'

export default function PaginaLoginRegistro(){
    
    const router = useRouter()

    return(
        <div className='fondo1'>
            <div>
                <Image 
                    style={{paddingLeft:"300px"}}
                    src="/imagenes/pokemonLogo.png"
                    width={850}
                    height={205}
                    alt='hols'
                /> 
                <div>
                    <h4 className='subtitulo1'>Chowdawn</h4>
                    <div className='botonesLogin'>
                        <button className='botonRegistroLogin' onClick={() => router.push('/Logeo')}>Iniciar sesion</button>
                        <button className='botonRegistroLogin' onClick={() => router.push('/Registro')}>Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    )
}