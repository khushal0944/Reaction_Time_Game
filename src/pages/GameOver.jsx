import '../style.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function GameOver(){
    const score = useSelector(state => state.currentScores.score)
    const avgTime = useSelector(state => state.currentScores.avgTime)
    const bestScore = useSelector(state => state.bestOverAll.bestScore)
    const bestAvgTime = useSelector(state => state.bestOverAll.bestAvgTime)
    return (
        <div className="h-screen w-full anime flex justify-center bg-red-200">
            <div id="mainBox" className='divide-black  w-2/5 text-lg p-2 text-center my-4'>
                <h1 className='text-5xl text-red-800 mb-8 font-semibold uppercase'>Game Over!</h1>
                <div id='YourScore' className='flex w-full'>
                    <div id="part-1" className='w-1/2'>
                        <h1 className='text-gray-500'>Score</h1>
                        <h1 className='text-6xl text-rose-900'>{score}</h1>
                    </div>
                    <div id="part-2" className='w-1/2'>
                        <h1 className='text-gray-500'>Avg. Reaction Time</h1>
                        <h1 className='text-6xl text-rose-900'>{avgTime}<span className='text-2xl text-gray-500'>ms</span></h1>
                    </div>
                </div>
                <div id='bestScores' className='flex w-full mt-8 '>
                    <div id="part-1" className='w-1/2'>
                        <h1 className='text-gray-500'>Best</h1>
                        <h1 className='text-5xl'>{bestScore}</h1>
                    </div>
                    <div id="part-2" className='w-1/2'>
                        <h1 className='text-gray-500'>Best</h1>
                        <h1 className='text-5xl'>{bestAvgTime}<span className='text-2xl text-gray-500'>ms</span></h1>
                    </div>
                </div>
                <Link to={"/"}><button className='w-2/3 shadow-xl bg-[#f9f8b0] mt-16 hover:scale-105 transition hover:transition rounded-xl border-4 border-black py-2'><i className="ri-home-2-fill text-5xl"></i></button></Link>
                <Link to={"/game"}><button className='w-2/3 shadow-xl bg-[#f9f8b0] mt-5 mb-10 hover:scale-105 transition hover:transition rounded-xl border-4 border-black py-2'><i className="ri-restart-line text-5xl"></i></button></Link>
                <hr />
            </div>
        </div>
    )
}