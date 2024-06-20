import { useState } from "react"

export default function inputUser(){
    const [input, setInput] = useState("")
    function handleSubmit(e){
        e.preventDefault();
        
    }
    function setUser(e){
        if(e.trim() !== "") setInput(e)
    }
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Enter Your Name..." onChange={(e)=>setUser(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}