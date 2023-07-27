import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isStation: false,
    isPrice: false,
}

export const topScreenSlice = createSlice({
    name: "topScreen",
    initialState,
    reducers: {
        toggleStation: (state) => {
            state.isStation = !state.isStation;
        },
        togglePrice: (state) => {
            state.isPrice = !state.isPrice;
        }
    },
});

export const { toggleStation, togglePrice } = topScreenSlice.actions;