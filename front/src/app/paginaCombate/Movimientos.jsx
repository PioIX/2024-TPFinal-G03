"use client"

export default function Movimientos(props) {
    return (
        <button onClick={props.funcion} value={props.valor} disabled={props.desabilitado} style={{ width: "50%", height: "100%", alignContent: "center", backgroundColor: "red", borderRadius: "80px", paddingTop: "3%", paddingBottom: "3%", paddingLeft: "3%", paddingRight: "3%" }}>
            <p style={{ fontSize: "30px" }}>{props.nombre}</p>
            <p style={{ paddingLeft: "40%", fontSize: "30px" }}>{props.pps}</p>
        </button>
    )
}