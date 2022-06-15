// import {createSlice} from '@reduxjs/toolkit'

import { createSlice } from "@reduxjs/toolkit";


const init = {
  format: '',
  margins: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
}

const editorSlice = createSlice({
  name: 'editor',
  initialState: init,
  reducers: {
    setFormat(state, action) {
      state.format = action.payload;
      return state; 
    },

    setMargins(state, action) {
      state.margins = action.payload;
      return state;
    }
  }
});


export const {setFormat, setMargins} = editorSlice.actions;
export default editorSlice.reducer;

