import { useState, useEffect } from 'react'
import Pokemon from './Pokemon'

function PokemonsList() {
    const [pokemonsList, setPokemonsList] = useState(null)

    useEffect(() => {
        const getPokemons = async () => {
            const apiResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            const data = await apiResponse.json()
            const list = Array.from(data.results)

            let listOfPokemons = await Promise.all(
                list.map(item => {
                    const poke = fetch(item.url).then(resp => resp.json()).then(json => {
                        return { id: json.id, name: item.name, image: json.sprites.front_default }
                    })
                    return poke
                })

            )

            setPokemonsList(listOfPokemons)

        }

        getPokemons()
    }, [])

    const renderListOfPokemons = () => {
        return (
            pokemonsList.map(item => (
                <div className='flex flex-col items-center mb-2 p-2'>
                    <img src={item.image} alt="" className='h-20 w-20 cursor-pointer' />
                    <div className='text-slate-600 text-sm'>{`#${item.id} ${item.name}`}</div>
                </div>
            ))
        )
    }

    return (
        <div className="h-5/6 grid grid-cols-4 grid-rows-5" >
            {pokemonsList !== null && renderListOfPokemons()}
        </div>
    )
}

export default PokemonsList