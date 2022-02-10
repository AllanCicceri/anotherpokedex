import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WorldMap from '../pages/WorldMap'
import Welcome from '../pages/Welcome'
import NotFound from '../components/NotFoundPage'

function Body() {
    return (
        <div className="w-4/5 h-4/5 p-4 bg-white rounded-xl shadow-2xl">

            <Router>
                <Routes>
                    <Route path='/' element={<Welcome/>} />
                    <Route path='/home' element={<Welcome/>} />
                    <Route path='/worldmap' element={<WorldMap/>} />
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Router>

        </div>
    )
}

export default Body