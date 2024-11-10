"use client"

export default function PokemonesCambio(props){
    return(
        <div style={{width:"100%", display:"inline-flex", backgroundColor:"#dae5f0", borderRadius: "80px"}}>
            <img style={{width:"30%"}} src={props.PokemonCambio}></img>
            <div style={{display:"grid", paddingLeft:"5%"}}>
                <p style={{fontSize:"20px", paddingTop:"5%"}}>{props.NombrePokemon}</p>
                <p style={{fontSize:"20px"}}>{props.VidaRestante}/{props.VidaTotal}</p>
            </div>
        </div>
    )
}