import { HotpepperDataType } from "../hotpepperDataType";

export type TopScreenStateType = {
    isStation: boolean;
    isPrice: boolean;
    isNow: boolean;
    station: string;
    price: number;
    hotpepperDatas: HotpepperDataType[];
    startCoords: {
        latitude: number;
        longitude: number;
    }
  };
