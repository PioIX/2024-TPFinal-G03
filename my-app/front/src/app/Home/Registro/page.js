"use client"
import '@/app/Home/styles.css'
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Usuarios from "../listaUsuarios"
import {crearUsuarios} from "@/app/Home/listaUsuarios"
import Image from 'next/image'
import res from 'express/lib/response';

export default function PaginaRegistro(props){
    let[contrasenia, setContrasenia] = useState('')
    let[nombre, setNombre] = useState('')
    let[user, setUser] = useState('')
    let[errorLog, setErrorLog] = useState('')


    const router = useRouter()

    async function subirUsuario(id, nombre, contrasenia) {
        const data = {
            ID_usuario: id,
            nombre: nombre,
            contrasenia: contrasenia
        }
        console.log({ data })
        const response = await fetch('http://localhost:3000/insertarUsuarios', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
    }

    function registrarNombre(event){
        setNombre(event.target.value)
    }

    function registrarContrasenia(event){
        setContrasenia(event.target.value)
    }

    function buscarUserByUsername() {
        for(let i = 0; i < Usuarios.length; i++){
            if (i != Usuarios[i].id){
                console.log(Usuarios)
                return i
            } else {
                i++
            }
            }
    }

    function register(contrasenia) {
        let i = buscarUserByUsername()
        let check = false
        if (check === false){
            if(contrasenia!=""){
                return i}
            
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
        let result = register(contrasenia)
        console.log(result)
        switch(result){
            case -1:
                setErrorLog('Los datos incorrectos son ingresados, pruebe poner otra cosarda')
                break;
            case i:
                let id = i
                subirUsuario(id, nombre, contrasenia)
                console.log(id)
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