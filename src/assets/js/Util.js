function returnOffSet(page) {
    let returnValue = 0

    switch (page) {
        case 1:
            returnValue =  0
            break;
        case 2:
            returnValue =  20
            break;
        case 3:
            returnValue =  40
            break;
        case 4:
            returnValue =  60
            break;
        case 5:
            returnValue =  80
            break;
        case 6:
            returnValue =  100
            break;
        case 7:
            returnValue =  120
            break;
        case 8:
            returnValue =  140
            break;
        case 9:
            returnValue =  160
            break;
        case 10:
            returnValue =  180
            break;
        case 11:
            returnValue =  200
            break;
        case 12:
            returnValue =  220
            break;
        case 13:
            returnValue =  240
            break;
        case 14:
            returnValue =  260
            break;
        case 15:
            returnValue =  280
            break;

        default:
            returnValue =  0
            break;
    }

    return returnValue
}

async function returnPokemonList(page) {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page}`)
    const data = await apiResponse.json()
    const list = Array.from(data.results)

    let listOfPokemons = await Promise.all(
        list.map(item => {
            const poke = fetch(item.url).then(resp => resp.json()).then(json => {
                return { id: json.id, name: item.name, image: json.sprites.front_default }
            })
            return poke
        })
    )

    return listOfPokemons
}

export { returnOffSet, returnPokemonList }