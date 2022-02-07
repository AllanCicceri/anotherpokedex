import NavItem from "./NavItem"

function Nav(){
    return(
        <div className="h-40 p-20 flex justify-center items-center">
            <div className="w-3/6 h-20 bg-white rounded-xl shadow-xl flex justify-center items-center space-x-20 ">
                <NavItem label="Regions" icon="map"/>
                <NavItem label="Pokemons" icon="pokeball"/>
                <NavItem label="Items" icon="item"/>
            </div>
        </div>
    )
}

export default Nav