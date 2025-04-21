import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    correct : 0,
    incorrect : 0
}

export const TestSlice = createSlice({
    name : 'test',
    initialState,
    reducers : {
        CountSelector : (state, action) => {
            state.correct = action.payload.count
            state.incorrect = action.payload.wrong

            console.log(state.incorrect, '###');
            
        }
    }
})

export const {CountSelector} = TestSlice.actions
export default TestSlice.reducer