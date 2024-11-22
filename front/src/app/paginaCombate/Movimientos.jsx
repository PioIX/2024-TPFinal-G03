"use client"

export default function Movimientos(props) {
    let types = {fire:"#fc4b08",water:"#0e90ad",grass:"#2d572c",steel:"#474b4e",dark:"#332f2c",fairy:"#ff5aa4",ground:"#d47b1a",rock:"#513a2a",fighting:"#a52019",psychic:"#ff089f",normal:"#82898f",bug:"#bfff00",electric:"#e5be01",dragon:"#4c2882",poison:"#88598b",ghost:"#693dae",flying:"#add8e6",ice:"#00aae4"}

    return (
        <button onClick={props.funcion} value={props.valor} disabled={props.desabilitado} style={{ width: "50%", height: "100%", alignContent: "center", backgroundColor: types[props.type], borderRadius: "80px", paddingTop: "3%", paddingBottom: "3%", paddingLeft: "3%", paddingRight: "3%" }}>
            <p style={{ fontSize: "30px" }}>{props.nombre}</p>
            <p style={{ paddingLeft: "40%", fontSize: "30px" }}>{props.pps}</p>
        </button>
    )
}