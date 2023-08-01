import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {TopScreenStateType} from "./type";
import {HotpepperDataType} from "../hotpepperDataType";

const initialState: TopScreenStateType = {
    isStation: false,
    isPrice: false,
    isNow: false,
    station: "",
    price: 0,
    hotpepperDatas: [],
    startCoords: {
        latitude: 35.681382,
    longitude: 139.766084,
    }
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
        },
        setStartCoords: (state, action: PayloadAction<{latitude: number, longitude: number}>) => {
            state.startCoords = action.payload;
        }
    },
});

export const { toggleStation, togglePrice, toggleNow, setStation, setPrice, setHotpepperDatas, setStartCoords } = topScreenSlice.actions;