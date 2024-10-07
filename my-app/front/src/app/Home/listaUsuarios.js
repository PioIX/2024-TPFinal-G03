"use client"
let id = 0
let Usuarios = [];
class crearUsuarios{
    constructor(nombre, contactos, contrasenia){
        this. id = id,
        id++,
        this.nombre= nombre,
        this.contactos= contactos
        this.contrasenia = contrasenia
    }
}
export default Usuarios = [
    new crearUsuarios("", [],""),
    new crearUsuarios("Fabricio", [3,4,5],"Valorant"),
    new crearUsuarios("Marta", [5],"S.u.r.b.p"),
    new crearUsuarios("Joaqui", [1,5], "Clara"),
    new crearUsuarios("Victoria", [1,5],'IVs'),
    new crearUsuarios("Sinko", [1,2,3,4],'Tapu Koko')
]

