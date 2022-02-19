import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function Pokemon({ props }) {
    const location = useLocation()
    const { name, img, url } = location.state

    const [pokemon, setPokemon] = useState(null)

    
    useEffect(async () => {
        async function getPokemonInfo(){
            const response = await fetch(url)
            const data = await response.json()
            const respImage = await (await fetch(data.sprites.other["official-artwork"].front_default)).url
            
            const pokemon = {
                name: name,
                img: respImage,
                height: data.height,
                weight: data.weight
            }
    
            return pokemon
        }

        const pokemon = await getPokemonInfo()
        setPokemon(pokemon)
    }, [])

    function renderPokemon(){
        return(
            <div className="flex items-center justify-center">
                <div className="pokemonInfo">
                    <img src={pokemon.img} alt="" className="h-98 w-98" />
                    <div className="font-bold text-7xl">{pokemon.name}</div>
                    <div>Height: {pokemon.height}, Weight: {pokemon.weight}</div>
                </div>
                <div className="pokemonMoves">

                </div>
            </div>
        )
    }

    return (
            pokemon !== null && renderPokemon()
    )
}

export default Pokemon