import { Link } from "react-router-dom"
import InputUser from '../components/inputUser'
import { useSelector } from "react-redux"
import { useState } from "react"

import ThemeComponent from "../components/ThemeComponent"

export default function Home(){
    const userName = useSelector(state => state.user.userName)
    const [showUserStats, setShowUserStats] = useState(false)
    const gamesPlayed = useSelector(state => state.user.gamesPlayed)
    const boxClicked = useSelector(state => state.user.boxClicked)
    const bestAvgTime = useSelector(state => state.bestOverAll.bestAvgTime)
    const bestScore = useSelector(state => state.bestOverAll.bestScore)

    return (
        <div className="w-full min-h-screen max-h-fit anime flex dark:bg-gray-950 justify-center bg-pink-100">
            <div id="themeButton" className="absolute right-4 gap-4 top-4 flex items-center ">
                <ThemeComponent />
            </div>
            <div id="mainBox" className="text-center h-fit py-4 xs:max-w-2xl max-w-xs w-11/12 px-4 mt-7">
                <h1 className="text-5xl font-semibold dark:text-white">Reaction <span className="text-red-700 dark:text-red-500 font-black">!</span></h1>
                <p className="mt-2 text-lg dark:text-white">Test And Improve Your Reflexes</p>
                {
                    !userName && <div>
                        <h1 className="mt-8 text-xl dark:text-white">Please Enter UserName First</h1>
                        <InputUser />
                    </div> 
                }
                {userName && !showUserStats &&
                <Link to={"/game"}>
                    <button className=" w-full dark:bg-gray-800 hover:dark:bg-gray-900 hover:dark:border-white dark:border-[#727272] shadow-xl dark:text-cyan-300 bg-[#f9f8b0] mt-16 hover:scale-105 transition hover:transition rounded-xl border-4 border-black  h-20 "><i className="ri-play-large-fill text-4xl"></i></button>
                </Link>
                }
                {
                    userName && !showUserStats && <button onClick={() => setShowUserStats(true)} className=" w-full mt-8 dark:bg-gray-800 hover:dark:bg-gray-900 dark:text-cyan-300 hover:dark:border-white dark:border-[#727272] shadow-xl bg-[#f9f8b0] hover:scale-105 transition hover:transition rounded-xl border-4 border-black  h-20 "><i className="ri-user-fill text-4xl"></i></button>
                }
                {
                    showUserStats && <button onClick={() => setShowUserStats(false)} className=" w-full mt-8 dark:border-white shadow-xl bg-[#f9f8b0] hover:scale-105 transition hover:transition rounded-xl border-4 border-black  h-20  dark:bg-gray-800 hover:dark:bg-gray-900 hover:dark:border-white dark:text-cyan-300  "><i className="ri-home-2-fill text-4xl"></i></button>
                }
                {
                    showUserStats && <div>
                        <div id="mainBox" className='w-full text-lg p-2 text-center my-7'>
                            <h1 className="text-5xl underline drop-shadow-md dark:text-gray-100 mb-7">Hello {userName}</h1>
                            <div id='YourScore' className='flex w-full'>
                                <div id="part-1" className='w-1/2'>
                                    <h1 className='text-gray-500 dark:text-gray-300'>Games Played</h1>
                                    <h1 className='text-6xl text-rose-900 dark:text-rose-600'>{gamesPlayed}</h1>
                                </div>
                                <div id="part-2" className='w-1/2'>
                                    <h1 className='text-gray-500 dark:text-gray-300'>Squares Clicked</h1>
                                    <h1 className='text-6xl text-rose-900 dark:text-rose-600'>{boxClicked}</h1>
                                </div>
                            </div>
                            <div id='bestScores' className='flex w-full mt-8 '>
                                <div id="part-1" className='w-1/2'>
                                    <h1 className='text-gray-500 dark:text-gray-300'>Best Score</h1>
                                    <h1 className='text-5xl dark:text-gray-200'>{bestScore}</h1>
                                </div>
                                <div id="part-2" className='w-1/2'>
                                    <h1 className='text-gray-500 dark:text-gray-300'>Avg. Reaction Time</h1>
                                    <h1 className='text-5xl dark:text-gray-200'>{bestAvgTime === 0 ? "-" : bestAvgTime}<span className='text-2xl dark:text-gray-300 text-gray-500'>{bestAvgTime === 0 ? "" : "ms"}</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}