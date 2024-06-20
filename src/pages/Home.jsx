import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
export default function Home(){
    const [theme, setTheme ]= useState(true)
    // const userName = useSelector(state => state.userReducer.userName)
    return (
        <div className={`w-full h-screen flex justify-center  ${theme ?  `bg-pink-200` : `bg-red-300`}`}>
            <div id="mainBox" className="text-center w-2/5 px-4 mt-16">
                <h1 className="text-5xl font-semibold">Reaction<span className="text-red-700">!</span></h1>
                <p className="mt-2 text-lg">Test And Improve Your Reflexes</p>
                {/* {userName && <inputUser />} */}

                <Link to={"/game"}>
                <button className=" w-2/3 shadow-xl bg-[#f9f8b0] mt-16 hover:scale-105 transition hover:transition rounded-xl border-2 border-black  h-20 "><i className="ri-play-large-fill text-4xl"></i></button>
                </Link>
                <Link>
                <button className=" w-2/3 mt-8 shadow-xl bg-[#f9f8b0] hover:scale-105 transition hover:transition rounded-xl border-2 border-black  h-20 "><i className="ri-user-fill text-4xl"></i></button>
                </Link>
            </div>
        </div>
    )
}