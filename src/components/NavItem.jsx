import map from '../assets/imgs/map.svg'
import pokeball from '../assets/imgs/pokeball.svg'
import item from '../assets/imgs/item.svg'
import {MdCatchingPokemon, MdExplore, MdScience} from 'react-icons/md'
import {Link} from 'react-router-dom'


function NavItem({label, icon}){

    const renderIcon = () => {
        switch (icon) {
            case 'pokemons':
                return <MdCatchingPokemon className='mr-2'/>
                break;
            case 'worldmap':
                return <MdExplore className='mr-2'/>
                break;
            case 'item':
                return <MdScience className='mr-2'/>
                break;
        }
    }
    
    return(
        <a href={'/' + icon} className="text-xl text-slate-600 font-bold flex items-center justify-center w-40 h-full hover:cursor-pointer  hover:text-red-600 hover:border-b-4 
            hover:border-red-500">
            {renderIcon()}
            {label}
        </a>
    )
}

export default NavItem