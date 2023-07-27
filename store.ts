import { configureStore } from "@reduxjs/toolkit";
import { topScreenSlice } from "./src/topScreenComponents/slice";

export const store = configureStore({
    reducer: topScreenSlice.reducer,
});