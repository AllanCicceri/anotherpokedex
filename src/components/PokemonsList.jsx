import {useState, useEffect} from 'react'

function PokemonsList(){
    const [pokemonsList, setPokemonsList] = useState([])

    useEffect(() => {
        const getPokemons = async () => {
            console.log('entrou na getPokemons')
        }

        getPokemons()
    },[])

    return (
        <div className="h-full" >poke</div>
    )
}

export default PokemonsList