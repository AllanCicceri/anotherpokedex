import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { camelize } from '../assets/js/util'

function Pokemon({ props }) {
    const location = useLocation()
    const { name, img, url } = location.state

    const [pokemon, setPokemon] = useState(null)


    useEffect(async () => {
        async function getPokemonInfo() {
            const response = await fetch(url)
            const data = await response.json()
            const respImage = (await fetch(data.sprites.other["official-artwork"].front_default)).url
            let typesRes = []
            data.types.map(item => {
                typesRes.push(item.type.name)
            })

            let typesImg = []
            typesRes.map( item => {
                typesImg.push(`/types/${item}.svg`)
            }
            )


            const pokemon = {
                name: camelize(name),
                img: respImage,
                height: data.height,
                weight: data.weight,
                types: typesImg
            }

            return pokemon
        }

        const pokemon = await getPokemonInfo()
        setPokemon(pokemon)
    }, [])



    function renderPokemon() {
        return (
            <div className="flex items-center justify-center">
                <div className="pokemonInfo">
                    <img src={pokemon.img} alt="" className="h-98 w-98" />
                    <div className="font-bold text-7xl">{pokemon.name}</div>
                    <div>Height: {pokemon.height}, Weight: {pokemon.weight}</div>
                    <div className="flex">
                        {pokemon.types.map(item => (
                            <img src={item} alt="icons of pokemon type" className="bg-black w-10 h-10 "/>
                        ))}
                    </div>

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