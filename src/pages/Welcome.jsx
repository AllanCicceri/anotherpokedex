import ProfOak from '../assets/imgs/prof_oak.gif'

function Welcome(){
    return(
        <div className="h-4/6 lg:h-full w-full text-black p-4 flex justify-center items-center">
            <img src={ProfOak} alt="professor oak welcome from game boy pokemon games" className='w-4/5 h-4/5' />
        </div>
    )
}

export default Welcome