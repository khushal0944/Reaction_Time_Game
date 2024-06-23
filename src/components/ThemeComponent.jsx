import { changeTheme } from "../slices/themeSlice"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ThemeComponent(){
    const theme = useSelector(state => state.themes.theme)
    const dispatch = useDispatch();
    const [inputTheme,setInputTheme] = useState(theme === "dark" ? true : false)

    useEffect(() => {
        const htmlElement = document.querySelector("html");

        if (htmlElement) {
            htmlElement.classList.remove("dark", "light");
            htmlElement.classList.add(theme);
        }
    }, [theme]);

    function playSound(){
        if(!inputTheme){
            const audioOn = new Audio("./toggleOn.mp3")
            audioOn.volume = 0.5
            audioOn.play();
        } else{
            const audioOff = new Audio("./toggleOff.mp3")
            audioOff.volume = 0.5
            audioOff.play();
        }
    }

    function handleThemeToggle(e){
        setInputTheme(e)
        dispatch(changeTheme())
    }
    return (
        <>
            <label className="switch">
                <input type="checkbox" checked={inputTheme} onClick={playSound} onChange={(e) => handleThemeToggle(e.currentTarget.checked)} />
                <span className="slider"></span>
            </label>
        </>
    )
}