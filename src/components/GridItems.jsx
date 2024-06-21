import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateBestAvgTime } from "../slices/bestScoreSlice";
import { useState,useEffect } from "react";
import { updateAvgTime } from "../slices/scoreSlice";
import { updateGamesPlayed, updateBoxClicked } from "../slices/userSlice"

export const GridItems = ({ rows, columns, highlightedIndex, setScore, setEndTime, score, timeArray }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const bestAvgTime = useSelector(state => state.bestOverAll.bestAvgTime)
    const [avgTime, setAvgTime] = useState(0)

    useEffect(() => {
        if (timeArray.length > 0) {
            const calculatedAvgTime = timeArray.reduce((acc, eachVal) => acc + eachVal, 0) / timeArray.length;
            setAvgTime(calculatedAvgTime);
        }
    }, [timeArray]);

    function highlightedClicked(){
        setScore(prev => prev + 1)
        setEndTime(Date.now())
    }

    const endGame = () => {
        if(avgTime) dispatch(updateAvgTime(avgTime.toFixed(0)))
        if ((avgTime < bestAvgTime || bestAvgTime === 0) && score >= 5 ) {
            console.log("Updating Best Avg Time:", avgTime);
            dispatch(updateBestAvgTime(Number(avgTime.toFixed(0))));
        }
        dispatch(updateBoxClicked(score))
        dispatch(updateGamesPlayed())
        navigate("/GameOver");
    };


	const gridItems = [];

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			const index = i * columns + j;
			gridItems.push(
				index === highlightedIndex ? <div
					key={`${i}-${j}`}
					className={`bg-black rounded-3xl flex justify-center items-center`}
                    onClick={highlightedClicked}
				>
                    <i className="ri-cursor-fill text-white text-2xl transition"></i>
				</div> : <div
					key={`${i}-${j}`}
                    onClick={endGame}
				></div>
			);
		}
	}

	return (
		<div
			className={`grid w-full h-full p-2 bg-green-300`}
			style={{
				gridTemplateRows: `repeat(${rows}, 1fr)`,
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
			}}
		>
			{gridItems}
		</div>
	);
};
