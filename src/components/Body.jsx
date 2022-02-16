import { Routes, Route } from 'react-router-dom'
import WorldMap from '../pages/WorldMap'
import Welcome from '../pages/Welcome'
import Pokemons from '../pages/Pokemons'
import Pokemon from '../pages/Pokemon'

function Body() {
    return (
        <div className="w-3/5 h-4/5 p-4 bg-white rounded-xl shadow-2xl">
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/pokemons' element={<Pokemons />} />
                <Route path='/worldmap' element={<WorldMap />} />
                <Route path='/pokemon' element={<Pokemon />}/>
                <Route path='*' element={<Welcome />} />
            </Routes>
        </div>
    )
}

export default Body