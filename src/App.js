import './App.css';
import Nav from './components/Nav'
import Body from './components/Body'

function App() {
  return (
    <div className="w-screen h-screen bg-slate-100 flex flex-col justify-center items-center">
      <Nav />      
      <Body />
    </div>
  );
}

export default App;
