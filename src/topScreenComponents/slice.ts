import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {TopScreenStateType} from "./type";

const initialState: TopScreenStateType = {
    isStation: false,
    isPrice: false,
    isNow: false,
    station: "",
    price: 0,
    hotpepperDatas: [],
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
        setHotpepperDatas: (state, action: PayloadAction<HotpepperDataType[]>) => {
            state.hotpepperDatas = action.payload;
        }
    },
});

export const { toggleStation, togglePrice, toggleNow, setStation, setPrice, setHotpepperDatas } = topScreenSlice.actions;