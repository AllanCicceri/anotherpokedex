import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { camelize, typesColors } from '../assets/js/util'

function Pokemon() {
    const location = useLocation()
    const { name, url } = location.state

    const [pokemon, setPokemon] = useState(null)


    useEffect(async () => {
        async function getPokemonInfo() {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data.moves)
            const respImage = (await fetch(data.sprites.other["official-artwork"].front_default)).url
            let typesRes = []
            data.types.map(item => {
                typesRes.push(item.type.name)
            })

            let types = []
            typesRes.map(item => {
                types.push(item)
            }
            )


            const pokemon = {
                name: camelize(name),
                img: respImage,
                height: data.height,
                weight: data.weight,
                types: types
            }


            return pokemon
        }

        const pokemon = await getPokemonInfo()
        setPokemon(pokemon)
    }, [])



    function renderPokemon() {
        return (

            <div className="w-full h-full flex justify-center items-center">
                <div className="pokemonInfo flex flex-col items-center">
                    <img src={pokemon.img} alt="" className="h-98 w-98 mb-2" />
                    <div className="font-bold text-4xl md:text-7xl mb-2">{pokemon.name}</div>
                    <div className="mb-4">Height: {pokemon.height}, Weight: {pokemon.weight}</div>
                    <div className="flex">
                        {pokemon.types.map(item => (
                            <img src={`/types/${item}.svg`} alt="icons of pokemon type" className={`${typesColors[item]} w-8 h-8 rounded-full p-1 mr-1`} />
                        ))}
                    </div>

                </div>
                {/* <div className="bg-slate-100 p-4 h-5/6 shadow-xl rounded-xl">
                        teste
                    </div> */}

            </div>

        )
    }

    return (
        pokemon !== null && renderPokemon()
    )
}

export default Pokemon