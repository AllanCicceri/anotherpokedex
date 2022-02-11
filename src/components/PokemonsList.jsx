import {useState, useEffect} from 'react'

function PokemonsList(){
    const [pokemonsList, setPokemonsList] = useState([])

    useEffect(() => {
        const getPokemons = async () => {
            const apiResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then(resp => resp.json())
            const listOfPokemons = Array.from(apiResponse.results)
            console.log(listOfPokemons)
            console.log(apiResponse.next)
        }

        getPokemons()
    },[])

    return (
        <div className="h-full" >poke</div>
    )
}

export default PokemonsList