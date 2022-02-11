function Pokemon({name, image}){


    return(
        <div className="m-2 p-2 w-48 h-48">
            <img src={image} alt="" />
            {name}
        </div>
    )
}

export default Pokemon