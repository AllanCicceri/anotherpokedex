import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from '../components/Welcome'
import WorldMap from '../components/WorldMap'
import NotFound from '../components/NotFoundPage'

function Body() {
    return (
        <div className="w-4/5 h-4/5 bg-white rounded-xl shadow-2xl">

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