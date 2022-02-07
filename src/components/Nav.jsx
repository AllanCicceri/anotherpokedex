import NavItem from "./NavItem"

function Nav(){
    return(
        <div className="w-3/5 mb-5 h-20 bg-white rounded-xl shadow-xl flex justify-center items-center space-x-20 p-x-5">
                <NavItem label="Regions" icon="map"/>
                <NavItem label="Pokemons" icon="pokeball"/>
                <NavItem label="Items" icon="item"/>
            </div>
        
    )
}

export default Nav