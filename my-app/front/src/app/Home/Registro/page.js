"use client"
import '@/app/Home/styles.css'
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useEffect } from "react";

export default function PaginaRegistro(props){
    let[contrasenia, setContrasenia] = useState('')
    let[nombreUsuario, setnombreUsuario] = useState('')
    let[errorLog, setErrorLog] = useState('')
    let [ID, setID] = useState(0.1)
    let id = 0.2
    let [listaUsuariosBackend, setListaUsuariosBackend] = useState([])       
    const router = useRouter()


        const traerLista = async () => {
                const response = await fetch('http://localhost:3001/traerUsuarios', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                const result = await response.json()
                setListaUsuariosBackend(result) 
                console.log(result)
        }

        useEffect(()=>{
            traerLista()         
        },[])


    async function subirUsuario(ID, nombreUsuario, contrasenia, puntos) {
        const data = {
            ID_usuario: ID,
            nombre: nombreUsuario,
            contrasenia: contrasenia,
            puntos: puntos
        }
        console.log(data)
        const response = await fetch('http://localhost:3001/insertarUsuarios', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
    }
    
    function registrarNombre(event){
        setnombreUsuario(event.target.value)
    }

    function registrarContrasenia(event){
        setContrasenia(event.target.value)
    }


    function register(nombreUsuario) {
        let check = false
        let i = 0 
        while (i < listaUsuariosBackend.length){
            console.log(listaUsuariosBackend)
            if(nombreUsuario == listaUsuariosBackend[i].nombre){
                check = true
            }
            i++
        }
        console.log(i)
        if (check == false){
            console.log("hol")
            id = i
            setID(i)
            return 1}
        else{
            return 2}
    }

    useEffect(()=>{
        console.log(ID)
    },[ID])


    function registrarsePorBoton() { 
        let result = register(nombreUsuario)
        let puntos = 0
        switch(result){
            case 1:
                subirUsuario(id, nombreUsuario, contrasenia, puntos)
                alert("Se registro exitosamente")
                router.push('/Home/Teambuilder')
                break;
            case 2:
                setErrorLog('el usuario ya existe')
                break;
        }
    }

    return(
        <div className='fondo2'>
            <div className='display'>
                <Image 
                    src="/imagenes/pokemonLogo.png"
                    width={280}
                    height={100}
                    alt='hols'
                /> 
                    <h4 className='subtitulo2'>Chowdawn</h4>
                    <div className='divBotones'>
                        <input onChange={registrarNombre} className={"botonInput"} placeholder={"Ingrese el nombre"}></input>
                        <p className='p'></p>
                        <input onChange={registrarContrasenia} className={"botonInput"} placeholder={"Ingrese la contraseña"}></input>
                        <button className='botonRegistroLogin' style={{paddingRight: "190px", paddingLeft:"159px"}} onClick={registrarsePorBoton}>Registrarse</button>
                    </div>
                    
            </div>
        </div>
    )
}