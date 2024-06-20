import { createSlice } from "@reduxjs/toolkit"; 

const AvgTime = JSON.parse(localStorage.getItem("avgtime"))
const best = JSON.parse(localStorage.getItem("bestscore"))

const initialState = {
    bestScore : best || 0,
    bestAvgTime : AvgTime || 0
}

const scoreSlice = createSlice({
    name : "BestScore",
    initialState,
    reducers : {
        updateScore : (state, action)=>{
            state.bestScore = action.payload;
            localStorage.setItem("bestscore",JSON.stringify(state.bestScore))
        },
        updateAvgTime : (state, action)=>{
            state.bestAvgTime = action.payload;
            localStorage.setItem("avgtime",JSON.stringify(state.bestAvgTime))
        }
    }
})

export const {updateScore, updateAvgTime} = scoreSlice.actions

export default scoreSlice.reducer;