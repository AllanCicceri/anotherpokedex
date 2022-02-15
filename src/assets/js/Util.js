function returnOffSet(page) {
    switch (page) {
        case '1':
            return '0'
            break;
        case '2':
            return '20'
            break;
        case '3':
            return '40'
            break;
        case '4':
            return '60'
            break;
        case '5':
            return '80'
            break;
        case '6':
            return '100'
            break;
        case '7':
            return '120'
            break;
        case '8':
            return '140'
            break;
        case '9':
            return '160'
            break;
        case '10':
            return '180'
            break;
        case '11':
            return '200'
            break;
        case '12':
            return '220'
            break;
        case '13':
            return '240'
            break;
        case '14':
            return '260'
            break;
        case '15':
            return '280'
            break;

        default:
            return '0'
            break;
    }
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