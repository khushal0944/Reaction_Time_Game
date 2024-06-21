import {configureStore} from '@reduxjs/toolkit'
import bestScoreSlice from '../slices/bestScoreSlice'
import  userSlice from '../slices/userSlice'
import  scoreSlice from '../slices/scoreSlice'

const store = configureStore({
    reducer : {
        bestOverAll : bestScoreSlice,
        user : userSlice,
        currentScores : scoreSlice
    }
}) 
export default store;