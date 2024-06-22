import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { setUserName } from "../slices/userSlice";

export default function ChangeUser({user,setEditButton}){
    const [input, setInput] = useState(user)
    const [showError, setShowError] = useState(false)
    const dispatch = useDispatch()
    function handleSubmit(e){
        if(Number(input) || input.trim() === "" || (input.trim().length < 3 || input.trim().length > 20)){
            setShowError(true);
            return;
        };
        setShowError(false);
        dispatch(setUserName(input))
        setEditButton((prev) => !prev)
    }

    useEffect(()=>{
        if(Number(input) || input.trim().length < 3 || input.trim().length > 20 || input.trim() === ""){
            setShowError(true);
            return;
        };
        setShowError(false)
    },[input])

    return (
        <div className="relative">
                <input type="text" placeholder="New Username" value={input} className="dark:bg-gray-800 dark:focus-within:border-white dark:border-[#727272] outline-none dark:focus-within:bg-gray-900 dark:placeholder:text-gray-300 dark:text-white border-black border-2 rounded-xl p-2 text-2xl" onInput={(e)=> setInput(e.target.value)} />
                {<button className="text-4xl text-blue-700 ml-5 mt-3" onClick={handleSubmit}><i className="ri-save-3-line"></i></button>}
                {showError && <p className="text-red-700 absolute left-16 mt-5 dark:text-red-500 text-2xl">Invalid User Name</p>}
        </div>
    )
}