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
    let [listaUsuariosBackend,setListaUsuariosBackend] = useState()
    let [ID, setId] = useState(0)

                    
    const router = useRouter()


    async function traerLista() {
        const response = await fetch('http://localhost:3001/traerUsuarios', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const result = await response.json();
        setListaUsuariosBackend(result)
    }

    useEffect(function(){traerLista},[])


    async function subirUsuario(id, nombreUsuario, contrasenia) {
        const data = {
            ID_usuario: id,
            nombre: nombreUsuario,
            contrasenia: contrasenia
        }
        const response = await fetch('http://localhost:3001/insertarUsuarios', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
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
        traerLista()
        let check = true
        let check2 = false
        let i = 0 
        console.log(listaUsuariosBackend[0])
        while (check){
            if(nombreUsuario == listaUsuariosBackend[i].nombre){
                check = false
                check2 = true}
            else if(i > listaUsuariosBackend.length){
                check = false
            }
            else{
                i++
            }
        }
        if (check2 == false){
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
        let i = 1
        switch(result){
            case 1:
                while(check){
                    if (i != listaUsuariosBackend[i].ID_usuario){
                        setId(i)
                        check = false
                    } else {
                        i++
                    }
                }
                subirUsuario(ID, nombreUsuario, contrasenia)
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