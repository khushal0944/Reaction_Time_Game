import { Link } from "react-router-dom"
import InputUser from '../components/inputUser'
import { useSelector } from "react-redux"
import { useState } from "react"

export default function Home(){
    const userName = useSelector(state => state.user.userName)
    const [showUserStats, setShowUserStats] = useState(false)
    const gamesPlayed = useSelector(state => state.user.gamesPlayed)
    const boxClicked = useSelector(state => state.user.boxClicked)
    const bestAvgTime = useSelector(state => state.bestOverAll.bestAvgTime)
    const bestScore = useSelector(state => state.bestOverAll.bestScore)

    return (
        <div className="w-full h-screen flex justify-center bg-pink-100">
            <div id="mainBox" className="text-center w-2/5 px-4 mt-16">
                <h1 className="text-5xl font-semibold">Reaction<span className="text-red-700">!</span></h1>
                <p className="mt-2 text-lg">Test And Improve Your Reflexes</p>
                {
                    !userName && <div>
                        <h1 className="mt-8 text-xl">Please Enter UserName First</h1>
                        <InputUser />
                    </div> 
                }
                {userName && !showUserStats &&
                <Link to={"/game"}>
                    <button className=" w-full shadow-xl bg-[#f9f8b0] mt-16 hover:scale-105 transition hover:transition rounded-xl border-4 border-black  h-20 "><i className="ri-play-large-fill text-4xl"></i></button>
                </Link>
                }
                {
                    userName && !showUserStats && <button onClick={() => setShowUserStats(true)} className=" w-full mt-8 shadow-xl bg-[#f9f8b0] hover:scale-105 transition hover:transition rounded-xl border-4 border-black  h-20 "><i className="ri-user-fill text-4xl"></i></button>
                }
                {
                    showUserStats && <button onClick={() => setShowUserStats(false)} className=" w-full mt-8 shadow-xl bg-[#f9f8b0] hover:scale-105 transition hover:transition rounded-xl border-4 border-black  h-20 "><i className="ri-home-2-fill text-4xl"></i></button>
                }
                {
                    showUserStats && <div>
                        <div id="mainBox" className='w-full text-lg p-2 text-center my-7'>
                            <h1 className="text-5xl underline drop-shadow-md  mb-7">Hello {userName}</h1>
                            <div id='YourScore' className='flex w-full'>
                                <div id="part-1" className='w-1/2'>
                                    <h1 className='text-gray-500'>Games Played</h1>
                                    <h1 className='text-6xl text-rose-900'>{gamesPlayed}</h1>
                                </div>
                                <div id="part-2" className='w-1/2'>
                                    <h1 className='text-gray-500'>Squares Clicked</h1>
                                    <h1 className='text-6xl text-rose-900'>{boxClicked}</h1>
                                </div>
                            </div>
                            <div id='bestScores' className='flex w-full mt-8 '>
                                <div id="part-1" className='w-1/2'>
                                    <h1 className='text-gray-500'>Best Score</h1>
                                    <h1 className='text-5xl'>{bestScore}</h1>
                                </div>
                                <div id="part-2" className='w-1/2'>
                                    <h1 className='text-gray-500'>Avg. Reaction Time</h1>
                                    <h1 className='text-5xl'>{bestAvgTime}<span className='text-2xl text-gray-500'>ms</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}