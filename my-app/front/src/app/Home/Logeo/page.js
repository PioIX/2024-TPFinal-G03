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
    let [ID, setID] = useState(0)
    let [listaUsuariosBackend, setListaUsuariosBackend] = useState([])       
    const router = useRouter()
    const [usuarioLog, setUsuarioLog] = useState('')
    let id = 0 


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



    
    function registrarNombre(event){
        setnombreUsuario(event.target.value)
    }

    function registrarContrasenia(event){
        setContrasenia(event.target.value)
    }

    useEffect(()=>{
        console.log(ID)
    },[ID])
    

    function chequeo(nombreUsuario, usuarioContrasenia) {
        let check = false
        let i = 0 
        while (i < listaUsuariosBackend.length){
            console.log(listaUsuariosBackend)
            if(nombreUsuario == listaUsuariosBackend[i].nombre && usuarioContrasenia == listaUsuariosBackend[i].contrasenia){
                console.log("hol")
                id = i
                setID(i)
                return 1}
                return 1
            }
            if (nombreUsuario == listaUsuariosBackend[i].nombre && usuarioContrasenia != listaUsuariosBackend[i].contrasenia){
                return 2
            }
            i++
        if(i > listaUsuariosBackend.length){
            return 3
        }
    }


    /*function iniciarSesion(){
        for(let i =0;i<Usuarios.length;i++){
            if (Usuarios[i].nombre == nombre && Usuarios[i].contrasenia == contrasenia) {
                setUser(Usuarios[i].id)
                setErrorLog('')
                console.log(Usuarios[i].id)
                return Usuarios[i].id
            }
        }
        setErrorLog('El nombre o la contraseña son incorrectas')
    }*/



    function iniciarSesion() { 
        let result = chequeo(nombreUsuario, contrasenia)
        let i = 0
        let puntos = 0
        switch(result){
            case 1:
                alert("se inicio exitosamente")
                router.push('/Home/Teambuilder')

                break;
            case 2:
                alert('contraseña incorrecta')
                break;
            case 3:
                alert("ningun dato es correcto")
                break
            }
        }
    return(
        <div className='fondo2'>
            <div>
                <Image 
                    src="/imagenes/pokemonLogo.png"
                    width={280}
                    height={100}
                    alt='hols'
                /> 
                <div>
                    <h4 className='subtitulo1'>Chowdawn</h4>
                    <div className='botonesLogin'>
                        <input onChange={registrarNombre} placeholder={"Ingrese el nombre"}></input>
                        <input onChange={registrarContrasenia} placeholder={"Ingrese la contraseña"}></input>
                        <button className='botonRegistroLogin' onClick={iniciarSesion}>Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    )
}