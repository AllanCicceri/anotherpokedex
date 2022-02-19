import { useContext } from 'react'
import PokeListContext from '../context/pokemonlist-context'
import { Link } from 'react-router-dom'

function PokemonsList() {
    const mdGridClasses = 'md:grid md:grid-cols-2 md:grid-rows-10'
    const lgGridClasses = 'lg:grid lg:grid-cols-4 lg:grid-rows-5'

    const[pokemonsList] = useContext(PokeListContext)
 
    const renderListOfPokemons = () => {
        
        return (
            pokemonsList.map(item => (
                
                <Link to={'/pokemon'} state={{name:item.name, img:item.image, url:item.url}} key={item.id} className='flex flex-col items-center mb-2 p-2'>
                    <img src={item.image} alt="" className='h-20 w-20 cursor-pointer' />
                    <div className='text-slate-600 text-sm'>{`#${item.id} ${item.name}`}</div>
                </Link>
            ))
        )
    }

    return (
        <div className='h-full overflow-auto'>
            <div className={`h-full flex flex-col ${mdGridClasses} ${lgGridClasses}`}>
                {pokemonsList !== null && renderListOfPokemons()}
            </div>
        </div>
    )
}

export default PokemonsList