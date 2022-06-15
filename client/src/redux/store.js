import { configureStore } from "@reduxjs/toolkit";
import editorSlice from "./slices/editorSlice";

const store = configureStore({
  reducer: {
    editor: editorSlice
  }
})

export default store;