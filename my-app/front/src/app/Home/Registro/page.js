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


    async function subirUsuario(id, nombreUsuario, contrasenia, puntos) {
        const data = {
            ID_usuario: id,
            nombre: nombreUsuario,
            contrasenia: contrasenia,
            puntos: puntos
        }
        console.log(data)
        const response = await fetch('http://localhost:3001/insertarUsuarios', {
            method: "POST",

            
            body: JSON.stringify(data)
        })
    }
    
    function registrarNombre(event){
        setnombreUsuario(event.target.value)
    }

    function registrarContrasenia(event){
        setContrasenia(event.target.value)
    }

    function buscarUserByUsername() {
        for(let i = 0; i < Usuarios.length; i++){
            if (i != Usuarios[i].id){
                return i    
            } else {
                i++
            }
            }
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
        if (check == false){
            console.log("hol")
            return 1}
        else{
            return 2}
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



    function registrarsePorBoton() { 
        let result = register(nombreUsuario)
        let check = true
        let i = 0
        let id = 0
        let puntos = 0
        switch(result){
            case 1:
                console.log(listaUsuariosBackend[i].ID_usuario)
                while(check){
                    if (i != listaUsuariosBackend[i].ID_usuario){
                        id = i
                        check = false
                    }
                    i++
                }
                subirUsuario(id, nombreUsuario, contrasenia, puntos)
                break;
            case 2:
                setErrorLog('el usuario ya existe')
                break;
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
                        <button className='botonRegistroLogin' onClick={registrarsePorBoton }>Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    )
}