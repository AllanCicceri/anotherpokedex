import { useLocation } from "react-router-dom"

function Pokemon({props}){
    const location = useLocation()
    const {teste} = location.state
    return(
        <div>
            {teste}
        </div>
    )
}

export default Pokemon