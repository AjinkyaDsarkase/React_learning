import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    all : '',
    digit : '',
    capital : '',
    small : '',
    input : '',
    allchar : '',
    checkText : ''
}

export const CaptchaSlice = createSlice({
    name : 'captcha',
    initialState,
    reducers : {
        CaptchaGenerator : (state, action) => {
            state.all = action.payload
            state.digit = state.all.digit
            state.capital = state.all.capital
            state.small = state.all.smallLetters
            console.log(state.digit);
            state.allchar = state.digit + state.capital + state.small

            state.input = ''
            state.input += state.digit[Math.floor(Math.random() * state.digit.length)]
            state.input += state.capital[Math.floor(Math.random() * state.capital.length)]
            state.input += state.small[Math.floor(Math.random() * state.small.length)] 

            for (let i = 0; i < 2; i++) {
                state.input += state.allchar[Math.floor(Math.random() * state.allchar.length)]
            }
        },
        // Checker : (state, action) => {
        //     state.checkText = action.payload
        // }
    }
})

export const {CaptchaGenerator, Checker} = CaptchaSlice.actions

export default CaptchaSlice.reducer