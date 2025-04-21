import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    special : '',
    digit : '',
    small : '',
    capital : '',
    all : '',
    password : ''

}

export const PassGeneratorSlice = createSlice({
    name : 'passGenerator',
    initialState,
    reducers: {

        onClickPasswordGenerator : (state, action) => {
            state.special = action.payload.special 
            state.digit = action.payload.digit 
            state.capital = action.payload.capital
            state.small = action.payload.small 
            state.password = ''
            
            state.password += state.special[Math.floor(Math.random() * state.special.length)]
            state.password += state.digit[Math.floor(Math.random() * state.digit.length)]
            state.password += state.capital[Math.floor(Math.random() * state.capital.length)]
            state.password += state.small[Math.floor(Math.random() * state.small.length)]     
            
            state.all = state.special + state.digit + state.capital + state.small

            for (let i = 0; i < 4; i++) {
                state.password += state.all[Math.floor(Math.random() * state.all.length)]
            }

            // state.special = action.payload.special || '';
            // state.digit = action.payload.digit || '';
            // state.capital = action.payload.capital || '';
            // state.small = action.payload.small || '';

            // // Reset password before generating a new one
            // state.password = '';

            // // Generate random characters from each category
            // if (state.special) {
            //     state.password += state.special[Math.floor(Math.random() * state.special.length)];
            // }
            // if (state.digit) {
            //     state.password += state.digit[Math.floor(Math.random() * state.digit.length)];
            // }
            // if (state.capital) {
            //     state.password += state.capital[Math.floor(Math.random() * state.capital.length)];
            // }
            // if (state.small) {
            //     state.password += state.small[Math.floor(Math.random() * state.small.length)];
            // }

            // // Combine all characters for additional randomization
            // state.all = state.special + state.digit + state.capital + state.small;

            // // Ensure at least some characters are available before randomization
            // if (state.all.length > 0) {
            //     for (let i = 0; i < 4; i++) {
            //         state.password += state.all[Math.floor(Math.random() * state.all.length)];
            //     }

        },


    }
})

export const {onClickPasswordGenerator} = PassGeneratorSlice.actions

export default PassGeneratorSlice.reducer