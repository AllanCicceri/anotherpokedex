function returnOffSet(page) {
    return page * 20
}

async function returnPokemonList(page) {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page}`)
    const data = await apiResponse.json()
    const list = Array.from(data.results)

    let listOfPokemons = await Promise.all(
        list.map(item => {
            const poke = fetch(item.url).then(resp => resp.json()).then(json => {
                return { id: json.id, name: item.name, image: json.sprites.front_default, url:item.url }
            })
            return poke
        })
    )

    return listOfPokemons
}

function camelize(word){
    return word.charAt(0).toUpperCase() + word.substring(1)
}


export { returnOffSet, returnPokemonList, camelize}