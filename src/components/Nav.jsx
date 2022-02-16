import NavItem from "./NavItem"

function Nav(){
    return(
        <div className="md:w-3/5 mb-5 h-20 bg-white rounded-xl shadow-xl w-5/6 flex flex-col md:flex-row justify-center items-center space-x-20">
                <NavItem label="Map" icon="worldmap"/>
                <NavItem label="Pokemons" icon="pokemons"/>
                <NavItem label="Items" icon="item"/>
            </div>
    )
}

export default Nav