import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // value: 0,
  // a : 0,
  // b : 0
  list : [],
  id : 0,
  change : '',
  updatedText : []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    OnClickHandler : (state, action) => {
      state.list.push(action.payload)
    },

    OnClickEditHandler : (state, action) => {
      state.change = action.payload
    },

    OnClickUpdateHandler : (state, action) => {
      state.updatedText = action.payload
      if(state.change != state.updatedText){
        state.list.splice(state.list.indexOf(state.change), 1, state.updatedText)
      }
    },

    OnClickDeleteHandler : (state, action) => {
      state.list.splice(state.list.indexOf(action.payload), 1)
    }
  },
})

export const { OnClickHandler, OnClickEditHandler, OnClickUpdateHandler, OnClickDeleteHandler } = counterSlice.actions

export default counterSlice.reducer