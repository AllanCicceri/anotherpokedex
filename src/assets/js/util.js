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

const typesColors = {
    "normal": 'bg-zinc-400',
    "fighting": 'bg-rose-500',
    "flying": 'bg-blue-300',
    "poison": 'bg-violet-500',
    "ground": 'bg-amber-700',
    "rock": 'bg-amber-600',
    "bug": 'bg-lime-500',
    "ghost": 'bg-indigo-600',
    "steel": 'bg-cyan-700',
    "fire": 'bg-orange-500',
    "water": 'bg-sky-500',
    "grass": 'bg-green-500',
    "electric": 'bg-amber-200',
    "psychic": 'bg-rose-400',
    "ice": 'bg-teal-200',
    "dragon": 'bg-sky-600',
    "dark": 'bg-stone-700',
    "fairy": 'bg-pink-400',
    "unknown": 'bg-neutral-800',
    "shadow": 'bg-indigo-900',
}


export { returnOffSet, returnPokemonList, camelize, typesColors}