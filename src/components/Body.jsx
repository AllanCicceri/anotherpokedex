import { Routes, Route } from 'react-router-dom'
import WorldMap from '../pages/WorldMap'
import Welcome from '../pages/Welcome'
import Pokemons from '../pages/Pokemons'
import Pokemon from '../pages/Pokemon'

function Body() {
    const lgClasses = 'lg:w-4/6'

    return (
        <div className={`w-5/6 h-5/6  p-4 bg-white rounded-xl shadow-2xl ${lgClasses}`}>
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