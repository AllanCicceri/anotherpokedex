import NavItem from "./NavItem"

function Nav(){
    return(
        <div className="h-40 p-20 flex justify-center items-center">
            <div className="w-3/6 h-20 bg-white rounded-xl shadow-xl flex space-x-20 p-10">
                <NavItem label="Regions"/>
                <NavItem label="Pokemons"/>
                <NavItem label="Items"/>
            </div>
        </div>
    )
}

export default Nav