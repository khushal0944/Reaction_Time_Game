import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    userName : null,
    gamesPlayed : null,
    boxClicked : null
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        
    }
})

export default userSlice.reducer