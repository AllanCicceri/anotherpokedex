import map from '../assets/imgs/map.svg'
import pokeball from '../assets/imgs/pokeball.svg'
import item from '../assets/imgs/item.svg'

function NavItem({label, icon}){
    const srcImg = (icon === 'map') ? map : (icon === 'pokeball') ? pokeball : (icon === 'item') ? item : ''

    return(
        <div className="text-xl text-slate-700 font-bold flex items-center justify-center w-40">
            <img src={srcImg} className="w-4 h-4 mr-2"></img>
            {label}
        </div>
    )
}

export default NavItem