"use client"
import '@/app/Home/styles.css'
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Usuarios from '../listaUsuarios'

import Image from 'next/image'

export default function PaginaRegistro(props){
    let[contrasenia, setContrasenia] = useState('')
    let[nombre, setNombre] = useState('')

    const router = useRouter()

    async function subirUsuario() {
        const data = {
            ID_usuario:2,
            nombre:"hollo",
            contrasena:"uw",
            contactos:"125"
        }

            const response = await fetch('http://localhost:4000/insertarUsuario',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const result = await response;
        console.log("POST /insertarUsuario", { data })
    }


    function registrarNombre(event){
        setNombre(event.target.value)
    }

    function registrarContrasenia(event){
        setContrasenia(event.target.value)
    }

    function buscarUserByUsername(username) {
        let i=0;
        let check =false
        while (check==false){
            if (username == Usuarios[i].nombre) {
                return i
            }
            else {
                i++;
                if (i==Usuarios.length) {
                    return false
                }
            }
        }
    }

    function register(user,contrasenia) {
        let i = buscarUserByUsername(user)
        if (i === false){
            if(contrasenia!=""){
                Usuarios.push(new crearUsuarios(user,[5],contrasenia))
                return 1}
            
            else{
            return -1}
        }
        else{
        return 2
        }
    }

    function iniciarSesion(){
        for(let i =0;i<Usuarios.length;i++){
            if (Usuarios[i].nombre == nombre && Usuarios[i].contrasenia == contrasenia) {
                setUser(Usuarios[i].id)
                setErrorLog('')
                console.log(Usuarios[i].id)
                return Usuarios[i].id
            }
        }
        setErrorLog('El nombre o la contraseña son incorrectas')
    }

    function registrarsePorBoton() { 
        let result = register(nombre,contrasenia)
        switch(result){
            case -1:
                setErrorLog('Los datos incorrectos son ingresados, pruebe poner otra cosarda')
                break;
            case 1:
                let id = iniciarSesion()
                subirUsuario(id,comprimirContactos(id))
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
                        <button className='botonRegistroLogin' onClick={registrarsePorBoton}>Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    )
}