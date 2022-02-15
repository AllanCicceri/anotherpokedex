import { MdCatchingPokemon, MdExplore, MdScience } from 'react-icons/md'
import { Link } from 'react-router-dom'


function NavItem({ label, icon }) {
    let returnIcon = null

    const renderIcon = () => {
        switch (icon) {
            case 'pokemons':
                returnIcon = <MdCatchingPokemon className='mr-2' />
                break;
            case 'worldmap':
                returnIcon = <MdExplore className='mr-2' />
                break;
            case 'item':
                returnIcon = <MdScience className='mr-2' />
                break;
        }
    
        return returnIcon
    }

    return (
        <Link to={'/' + icon} className="text-xl text-slate-600 font-bold flex items-center justify-center w-40 h-full hover:cursor-pointer  hover:text-red-600 hover:border-b-4 
                hover:border-red-500">
            {renderIcon()}
            {label}
        </Link>
    )
}

export default NavItem