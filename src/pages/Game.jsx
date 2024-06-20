import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAvgTime, updateScore } from "../slices/ScoreSlice";
const GridItems = ({ rows, columns, highlightedIndex, setScore, setEndTime }) => {
    const navigate = useNavigate()

    function highlightedClicked(){
        setScore(prev => prev + 1)
        setEndTime(Date.now())
    }

    function endGame(){
        navigate("/GameOver")
    }

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
				>
				</div>
			);
		}
	}

	return (
		<div
			className={`grid w-full h-full p-2 bg-yellow-200`}
			style={{
				gridTemplateRows: `repeat(${rows}, 1fr)`,
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
			}}
		>
			{gridItems}
		</div>
	);
};

export default function Game() {
	const [score, setScore] = useState(0);
	const [rowGrid, setRowGrid] = useState(3);
	const [colGrid, setColGrid] = useState(3);
	const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [timingArray, setTimingArray] = useState([])
    const [avgTime, setAvgTime] = useState(null)
    const bestScore = useSelector(state => state.score.bestScore); 
    const bestAvgTime = useSelector(state => state.score.bestAvgTime);
    const dispatch = useDispatch() 
    
    useEffect(()=>{
        if(score > bestScore) dispatch(updateScore(score))
        if(avgTime > bestAvgTime) dispatch(updateAvgTime(avgTime))
    },[score,avgTime])

	useEffect(() => {
		if (score >= 35 && score < 70) {
			setRowGrid(4);
		} else if (score >= 70) {
			setColGrid(4);
		}

		// Calculate a random index based on the current grid size
		const totalCells = rowGrid * colGrid;
		const randomIndex = Math.floor(Math.random() * totalCells);
        randomIndex !== highlightedIndex ? setHighlightedIndex(randomIndex) : setHighlightedIndex(6)
        setStartTime(Date.now())
	}, [score, rowGrid, colGrid]);
    

    // Calculate Reaction Time & Store In Timing Array
    useEffect(()=>{
        if(startTime !== null && endTime !== null){
            const timeTaken = endTime - startTime;
            if(timeTaken > 0) setTimingArray((prev) => [...prev, timeTaken])
        }
    },[endTime,startTime])


    // Calculate Average Time 
    useEffect(()=>{
        let sum = 0;
        let arrLength = timingArray.length
        for(let i=0;i<arrLength ; i++){
            sum += timingArray[i];
        }
        let avg = Math.round(sum/arrLength)
        setAvgTime(avg)
    },[timingArray])

	return (
		<div className="h-screen relative w-full">
            <h1 className="absolute left-1/2 text-4xl cursor-default text-white">Score</h1>
			<GridItems
				rows={rowGrid}
				columns={colGrid}
				highlightedIndex={highlightedIndex}
                setScore={setScore}
                setEndTime={setEndTime}
			/>
		</div>
	);
}
