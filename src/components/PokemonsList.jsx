import {useState, useEffect} from 'react'
import Pokemon from './Pokemon'

function PokemonsList(){
    const [pokemonsList, setPokemonsList] = useState(null)

    useEffect(() => {
        const getPokemons = async () => {
            const apiResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            const data = await apiResponse.json()
            const list = Array.from(data.results)

            let listOfPokemons = await Promise.all(
                list.map(item => {
                    const poke = fetch(item.url).then(resp => resp.json()).then(json => {
                        return {id:json.id, name: item.name, image:json.sprites.front_default}                     
                    })
                    return poke
                })

            )
            
            setPokemonsList(listOfPokemons)
            
        }

        getPokemons()
    },[])

    const renderListOfPokemons = () => {
        return pokemonsList !== null && pokemonsList.map(item => (
            <div>
                <img src={item.image} alt="" />
                <span>{`#${item.id} ${item.name}`}</span>
            </div>
        ))
    }

    return (
        <div className="h-full" >
            {pokemonsList !== null && renderListOfPokemons()}
        </div>
    )
}

export default PokemonsList