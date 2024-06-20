import {configureStore} from '@reduxjs/toolkit'
import scoreSlice from '../slices/ScoreSlice'
import  userSlice from '../slices/userSlice'

const store = configureStore({
    reducer : {
        score : scoreSlice,
        user : userSlice,
    }
}) 
export default store;