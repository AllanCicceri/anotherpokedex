function WorldMap() {

    const handleRegionClick = e => {
        console.log(e.target.id)
    }

    return (
        <div className="bg-world-map w-full h-full bg-no-repeat bg-center flex flex-col">
            <div id="upperRegions" className='h-full bg-white opacity-50 hover:opacity-0 transition-opacity ease-in-out delay-800'
                onClick={handleRegionClick}></div>
            <div id="middleRegions" className='h-full bg-white opacity-50 hover:opacity-0 transition-opacity ease-in-out delay-800'
                onClick={handleRegionClick}></div>
            <div id="lowerRegions" className='h-full bg-white opacity-50 hover:opacity-0 transition-opacity ease-in-out delay-800'
                onClick={handleRegionClick}></div>
        </div>
    )
}

export default WorldMap