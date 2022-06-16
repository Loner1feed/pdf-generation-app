// import {createSlice} from '@reduxjs/toolkit'

import { createSlice } from "@reduxjs/toolkit";


const init = {
  format: 'A4',
  margins: {
    right: 0.1,
    left: 0.1,
    top: 0.1,
    bottom: 0.1,
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

      switch (action.payload.type) {
        case 'marginTop':
          state.margins.top = Number(action.payload.value);
          break;

        case 'marginBottom':
          state.margins.bottom = Number(action.payload.value);
          break;

        case 'marginRight':
          state.margins.right = Number(action.payload.value);
          break;

        case 'marginLeft':
          state.margins.left = Number(action.payload.value);
          break;

        default:
          break;
      }

      return state;
    }
  }
});


export const { setFormat, setMargins } = editorSlice.actions;
export default editorSlice.reducer;

