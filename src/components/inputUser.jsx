import { useState } from "react"
import { useDispatch } from "react-redux";
import { setUserName } from "../slices/userSlice";

export default function InputUser(){
    const [input, setInput] = useState("")
    const [showError, setShowError] = useState(false)
    const dispatch = useDispatch()
    function handleSubmit(e){
        e.preventDefault();
        if(Number(input) || input.trim() === "" || input.length < 3){
            setShowError(true);
            return;
        };
        setShowError(false);
        dispatch(setUserName(input))
        setInput("")
    }
    function setUser(e){
        setInput(e)
        if(Number(input) || input.trim() === "" || input.length < 3){
            setShowError(true);
            return;
        };
        setShowError(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" className="border-black border-2 w-8/12 mt-3 rounded-xl p-3 text-2xl" onInput={(e)=> setUser(e.target.value)} />
                <button type="submit" className=" hover:scale-105 w-8/12 transition hover:transition shadow-xl bg-[#f9f8b0]  rounded-xl p-2 text-xl text-black uppercase border-2 border-black m-3">submit</button>
                {showError && <p className="text-red-700 text-2xl">Invalid User Name</p>}
            </form>
        </>
    )
}