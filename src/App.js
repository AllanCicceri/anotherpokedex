import './App.css';
import Nav from './components/Nav'
import Body from './components/Body'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
      <div className="w-screen h-screen bg-slate-100 flex flex-col justify-center items-center">
        <Router>
          <Nav />
          <Body />
        </Router>
      </div>
  );
}

export default App;
