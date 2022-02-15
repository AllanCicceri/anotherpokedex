import { useState,useEffect, useMemo } from "react"
import Pagination from "../components/Pagination"
import PokemonsList from "../components/PokemonsList"
import PokeListContext from '../context/pokemonlist-context'
import {returnPokemonList} from '../assets/js/Util'

function Pokemons(){
    const [pokemonList, setPokemonsList] = useState([])
    const memoizedValue = useMemo(()=>{}, [pokemonList])

    useEffect(() => {
        const getPokemons = async () => {
            const listOfPokemons = await returnPokemonList(0)

            setPokemonsList(listOfPokemons)
        }

        getPokemons()
    }, [memoizedValue])

    return (
        <PokeListContext.Provider value={[pokemonList, setPokemonsList]}>
            <div className="w-full h-full flex flex-col">
                <PokemonsList/>
                <Pagination pageClick = {async page => {
                    const pokemonList = await returnPokemonList(page)
                    setPokemonsList(pokemonList)
                    }}/>
            </div>
        </PokeListContext.Provider>
    )
}

export default Pokemons