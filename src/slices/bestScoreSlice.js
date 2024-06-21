import { createSlice } from "@reduxjs/toolkit"; 

const initialAvgTime = JSON.parse(localStorage.getItem("bestAvgtime")) || 0;
const initialBestScore = JSON.parse(localStorage.getItem("bestscore")) || 0;

const initialState = {
    bestScore : initialBestScore,
    bestAvgTime : initialAvgTime
}

const bestScoreSlice = createSlice({
    name : "BestScores",
    initialState,
    reducers : {
        updateBestScore : (state, action)=>{
            state.bestScore = action.payload;
            localStorage.setItem("bestscore",JSON.stringify(state.bestScore))
        },
        updateBestAvgTime : (state, action)=>{
            state.bestAvgTime = action.payload;
            localStorage.setItem("bestAvgtime",JSON.stringify(state.bestAvgTime))
        }
    }
})

export const {updateBestScore, updateBestAvgTime} = bestScoreSlice.actions

export default bestScoreSlice.reducer;