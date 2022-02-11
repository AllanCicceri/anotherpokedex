import {useState, useEffect} from 'react'

function PokemonsList(){
    const [pokemonsList, setPokemonsList] = useState([])

    useEffect(() => {
        const getPokemons = async () => {
            const apiResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            const data = await apiResponse.json()
            const listOfPokemons = Array.from(data.results)
            // console.log(apiResponse.next)//next page
            console.log(listOfPokemons)
        }

        getPokemons()
    },[])

    return (
        <div className="h-full" >poke</div>
    )
}

export default PokemonsList