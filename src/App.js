import './App.css';
import Nav from './components/Nav'
import Body from './components/Body'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
      <div className="w-screen h-screen bg-slate-100 pt-10">
      <span className='inline-block -mt-52 -ml-30 w-3/6 h-4/6 bg-transparent absolute bg-bgPokeball bg-no-repeat bg-left-top opacity-20'></span>
      <div className="relative h-full w-full z-20 flex flex-col justify-center items-center">
        <Router>
          <Nav />
          <Body />
        </Router>
      </div>
      </div>
  );
}

export default App;
