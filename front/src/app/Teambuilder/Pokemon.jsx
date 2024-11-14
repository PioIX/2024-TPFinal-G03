"use client"
import '@/app/styles.css'
import { encontrarMov, encontrarMovByNombre } from "@/funciones/funciones"

export default function PokemonComponente(props) {
    const nombresStats = ["Salud", "Ataque", "Defensa", "Ataque especial", "Defensa especial", "Velocidad"]
    const nombreClass = ['sliderSalud', 'sliderAtaque', 'sliderDefensa', 'sliderAtEspecial', 'sliderDfEspecial', 'sliderVelocidad']
    let movs = encontrarMov(props.pokemon.posibleMovs)

    function handlerMov(event) {
        props.funcionMov1(event, props.id);
    }
    function handlerEvs(event) {
        props.funcionEvs(event, props.id);
    }
    function handlerPokemon(event) {
        props.funcionPokemon(event, props.id);
    }
    function handlerApodo(event) {
        props.funcionNickname(event, props.id);
    }

    return (
        <div style={{ paddingBottom: "1%", paddingLeft: "1%" }}>
            <div style={{ paddingBottom: "1%", width: "96%" }}>
                <div className='nombrePokemon1' style={{ paddingLeft: "1%", paddingBottom: "1%" }}>
                    <h2>Apodo del pokemon</h2>
                    <div>
                        <input onChange={handlerApodo} value={props.pokemonName} id={0} />
                    </div>
                </div>
                <div className='datosPokemon'>
                    <div style={{ width: "33%", paddingLeft: "1%" }}>
                        <img src={props.imagenPokemon} className='imagenPokemonEditorEquipo'></img>
                        <h3 style={{ paddingTop: "7%", color: "rgb(11, 199, 199)" }}>Pokemon</h3>
                        <select onChange={handlerPokemon} id={0} className='pokemonElegido'>
                            {props.lista.map((pokemon, i) => (
                                <option value={i} key={pokemon.name} >{pokemon.name}</option>
                            ))}
                        </select>
                    </div>
                    <p style={{ width: "1%" }}></p>
                    <div style={{ width: "28%" }}>
                        <h1 style={{ color: "rgb(11, 199, 199)" }}>movimientos</h1>
                        <select onChange={handlerMov} id={0} className='estiloSelectorMovimiento'>
                            {movs.map((mov, i) => (
                                <option value={encontrarMovByNombre(mov)} key={mov} >{mov}</option>
                            ))}
                        </select>
                        <h1 style={{ paddingBottom: "8%" }}></h1>
                        <select onChange={handlerMov} id={1} className='estiloSelectorMovimiento'>
                            {movs.map((mov, i) => (
                                <option value={encontrarMovByNombre(mov)} key={mov} >{mov}</option>
                            ))}
                        </select>
                        <h1 style={{ paddingBottom: "8%" }}></h1>
                        <select onChange={handlerMov} id={2} className='estiloSelectorMovimiento'>
                            {movs.map((mov, i) => (
                                <option value={encontrarMovByNombre(mov)} key={mov} >{mov}</option>
                            ))}
                        </select>
                        <h1 style={{ paddingBottom: "8%" }}></h1>
                        <select onChange={handlerMov} id={2} className='estiloSelectorMovimiento'>
                            {movs.map((mov, i) => (
                                <option value={encontrarMovByNombre(mov)} key={mov} >{mov}</option>
                            ))}
                        </select>
                    </div>
                    <p style={{ width: "1%" }}></p>
                    {props.pokemon.baseStats.map((stat, i) => (
                        <div style={{ width: "41%" }} key={i}>
                            <h3 style={{ color: "rgb(11, 199, 199)" }}>{nombresStats[i]}</h3>
                            <input onChange={handlerEvs} type="range" id={i} min="0" max="252" defaultValue={0} className={nombreClass[i]} />
                            <label>{props.evsPokemon[i]}</label>
                            <span className='valores'>{props.statPokemon[i]}</span>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}