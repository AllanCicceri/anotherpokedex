import NavItem from "./NavItem"

function Nav(){
    const lgClasses = 'lg:w-4/6'

    return(
        <div className={`w-5/6 h-12 md:h-20 mb-5 bg-white rounded-xl shadow-xl flex justify-center items-center space-x-16 ${lgClasses}`}>
                <NavItem label="Map" icon="worldmap"/>
                <NavItem label="Pokemons" icon="pokemons"/>
                <NavItem label="Items" icon="item"/>
        </div>
    )
}

export default Nav