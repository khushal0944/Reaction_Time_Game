import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBestScore } from "../slices/bestScoreSlice";
import { GridItems } from '../components/GridItems'
import { updateScore } from "../slices/scoreSlice";

export default function Game() {
	const [score, setScore] = useState(0);
	const [rowGrid, setRowGrid] = useState(3);
	const [colGrid, setColGrid] = useState(3);
	const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [timingArray, setTimingArray] = useState([])
    const bestScore = useSelector(state => state.bestOverAll.bestScore); 
    const dispatch = useDispatch() 
    
    useEffect(()=>{
        if(score > bestScore) dispatch(updateBestScore(score))
        dispatch(updateScore(score))
    },[score])

	useEffect(() => {
		if (score >= 35 && score < 70) {
			setRowGrid(4);
		} else if (score >= 70) {
			setColGrid(4);
		}
		const totalCells = rowGrid * colGrid;
		const randomIndex = Math.floor(Math.random() * totalCells);
        randomIndex !== highlightedIndex ? setHighlightedIndex(randomIndex) : setHighlightedIndex((randomIndex === totalCells || randomIndex === 0) ? randomIndex : randomIndex-1)
        setStartTime(Date.now())
	}, [score, rowGrid, colGrid]);
    
    useEffect(()=>{
        if(startTime !== null && endTime !== null){
            const timeTaken = endTime - startTime;
            if(timeTaken > 0) setTimingArray((prev)=> [...prev,timeTaken])
        }
    },[endTime])

	return (
		<div className="h-screen overflow-hidden relative w-full">
            <h1 className="absolute left-1/2 text-5xl top-4 pointer-events-none drop-shadow-lg text-white cursor-default">{score}</h1>
			<GridItems
				rows={rowGrid}
				columns={colGrid}
				highlightedIndex={highlightedIndex}
                setScore={setScore}
                setEndTime={setEndTime}
                timeArray={timingArray}
                score={score}
			/>
		</div>
	);
}
