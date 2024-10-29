"use client"
import Pokemon from "./Pokemon";
import { useRouter } from 'next/navigation'

import Image from 'next/image'

export default function Home() {
    return ( 
        <div className='fondo3'>
            <div className='display2'>
                <Image 
                    src="/imagenes/pokemonLogo.png"
                    width={280}
                    height={100} 
                    alt='hols'
                /> 
                <h4 className='subtitulo2'>Chowdawn</h4>         
                <div>
                    <Pokemon nombreEquipo={"rgbyiu"} pokemon1={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon2={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon3={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon4={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon5={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon6={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}></Pokemon>
                    <Pokemon nombreEquipo={"rgbyiu"} pokemon1={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon2={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon3={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon4={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon5={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon6={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}></Pokemon>
                    <Pokemon nombreEquipo={"rgbyiu"} pokemon1={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon2={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon3={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon4={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon5={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}
                    pokemon6={"https://creativesharkco.com/cdn/shop/files/SpearowMiniSpritePixelArt.png?v=1719689997"}></Pokemon>
                </div>  
            </div>
        </div>
    )
}