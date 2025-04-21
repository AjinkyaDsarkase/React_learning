import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data : {},
    country : '',
    condition : '',
    icon : '',
    temp : '',
    wspeed : '',
    humidity : '',
    
}

export const WhetherSlice = createSlice ( {
    name : 'whether',
    initialState,
    reducers : {
        OnClickCountry : (state, action) => {
            state.data = action.payload
            state.condition = state.data.current.condition.text
            // console.log(state.condition);
            state.icon = state.data.current.condition.icon
            state.temp = state.data.current.temp_f
            state.wspeed = state.data.current.wind_kph
            state.humidity = state.data.current.humidity
        }
    }
})

export const {OnClickCountry} = WhetherSlice.actions

export default WhetherSlice.reducer