import { useContext } from 'react'
import PokeListContext from '../context/pokemonlist-context'

function PokemonsList() {
    const[pokemonsList] = useContext(PokeListContext)

    

    const renderListOfPokemons = () => {
        return (
            pokemonsList.map(item => (
                <div key={item.id} className='flex flex-col items-center mb-2 p-2'>
                    <img src={item.image} alt="" className='h-20 w-20 cursor-pointer' />
                    <div className='text-slate-600 text-sm'>{`#${item.id} ${item.name}`}</div>
                </div>
            ))
        )
    }

    return (
        <div className='h-full overflow-auto'>
            <div className="h-full md:grid md:grid-cols-4 md:grid-rows-5 flex flex-col">
                {pokemonsList !== null && renderListOfPokemons()}
            </div>
        </div>
    )
}

export default PokemonsList