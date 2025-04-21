import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username : '',
    password : ''
}

export const FormSlice = createSlice({
    name : 'form',
    initialState,
    reducers: {
        submitHandlerRed : (state, action) => {
            state.username = action.payload.username
            state.password = action.payload.password
        }
    }
})

export const {submitHandlerRed} = FormSlice.actions

export default FormSlice.reducer