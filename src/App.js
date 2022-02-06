import './App.css';

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="bg-[url('/public/pokeworldmap.webp')] w-full h-full bg-no-repeat bg-center bg-fixed flex flex-col">
        <div className='h-full bg-white opacity-50 hover:opacity-0 transition-opacity ease-in-out delay-800'></div>
        <div className='h-full bg-white opacity-50 hover:opacity-0 transition-opacity ease-in-out delay-800'></div>
        <div className='h-full bg-white opacity-50 hover:opacity-0 transition-opacity ease-in-out delay-800'></div>
      </div>
    </div>
  );
}

export default App;
