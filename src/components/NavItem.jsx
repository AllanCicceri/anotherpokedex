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

    const lgClasses = 'lg:h-full'
    
    return (
        <Link to={'/' + icon} className={`text-3xl text-slate-600 font-bold md:flex md:items-center md:justify-center hover:cursor-pointer hover:text-red-600 hover:border-b-4 
            hover:border-red-500 ${lgClasses}`}>
            {renderIcon()}
            <div className='hidden md:inline-block'>
                {label}
            </div>
        </Link>
    )
}

export default NavItem