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
                return { id: json.id, name: item.name, image: json.sprites.front_default }
            })
            return poke
        })
    )

    return listOfPokemons
}

export { returnOffSet, returnPokemonList }