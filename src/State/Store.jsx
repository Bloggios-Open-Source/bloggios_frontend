import {configureStore} from "@reduxjs/toolkit";
import {ThemeSlice} from "./ThemeSlice";

const store = configureStore({
    reducer: {
        theme: ThemeSlice.reducer
    }
})

export default store;