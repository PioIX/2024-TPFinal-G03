"use client"

export default function Movimientos(props){
    return(
            <div style={{width:"100%"}}>
                <button onClick={props.funcion} value={props.valor} disabled={props.desabilitado} style={{width:"100%", alignContent:"center", backgroundColor:"red", borderRadius: "80px", padding:"50px"}}>
                        <p style={{padding:"0", fontSize:"50px"}}>{props.nombre}</p>
                        <p style={{padding:"0", fontSize:"50px"}}>{props.pps}</p>
                </button>
            </div>
    )
}