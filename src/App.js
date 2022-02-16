import './App.css';
import Nav from './components/Nav'
import Body from './components/Body'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  const commonImgClasses = "absolute inline-block h-60 w-60 bg-bgPokeball bg-cover opacity-30 -mt-16 -ml-28"
  const mdImgClasses = "md:w-80 md:h-80 md:ml-0"
  const lgImgClasses = "lg:w-128 lg:h-128 lg:-mt-68 lg:-ml-20"

  return (
      <div className="w-screen h-screen bg-slate-100 pt-2 md:pt-4">
      <span className={`${commonImgClasses} ${mdImgClasses} ${lgImgClasses}`}></span>
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
