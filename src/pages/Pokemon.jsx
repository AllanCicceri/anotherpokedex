import { useLocation } from "react-router-dom"

function Pokemon({props}){
    const location = useLocation()
    const {name} = location.state
    return(
        <div>
            {name}
        </div>
    )
}

export default Pokemon