"use client"
import '@/app/Home/styles.css'
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Usuarios, { crearUsuarios } from "../listaUsuarios"
import Image from 'next/image'

export default function PaginaRegistro(props){
    let[contrasenia, setContrasenia] = useState('')
    let[nombre, setNombre] = useState('')
    let[user, setUser] = useState('')
    let[errorLog, setErrorLog] = useState('')
    let [listaUsuariosBackend,setListaUsuariosBackend] = useState([])
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
        console.log(result)
        setListaUsuariosBackend(result)
    }


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

    function register(nombre) {
        console.log(nombre)

        let lista = traerLista()
        let check = true
        let check2 = false
        let i = 0 
        while (check){
            if(nombre == lista[i].nombre){
                check2 = true
                check = false}
            else if(i > lista.length){
                check = false
            }
            else{
                i++
            }
        }
        if (check2 == false && i < lista.length){
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
        let result = register(nombre)
        console.log(result)
        let check = true
        let i = 1
        switch(result){
            case 1:
                console.log(listaUsuariosBackend)
                while(check){
                    if (i != listaUsuariosBackend[i].ID_usuario){
                        setId(i)
                        check = false
                    } else {
                        i++
                    }
                }
                subirUsuario(ID, nombre, contrasenia)
                console.log(ID)
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