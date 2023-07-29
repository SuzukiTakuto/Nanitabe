import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isStation: false,
    isPrice: false,
    isNow: false,
    station: "",
    price: 0,
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
        },
        toggleNow: (state, action: PayloadAction<boolean>) => {
            state.isNow = action.payload;
        },
        setStation: (state, action: PayloadAction<string>) => {
            state.station = action.payload;
        },
        setPrice: (state, action: PayloadAction<number>) => {
            state.price = action.payload;
        },
    },
});

export const { toggleStation, togglePrice, toggleNow, setStation, setPrice } = topScreenSlice.actions;