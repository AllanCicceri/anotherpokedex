import Pagination from "../components/Pagination"
import PokemonsList from "../components/PokemonsList"

function Pokemons(){

    return (
        <div className="w-full h-full flex flex-col">
            <PokemonsList/>
            <Pagination />
        </div>
    )
}

export default Pokemons