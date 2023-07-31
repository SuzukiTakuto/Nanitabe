import React from "react";
import Input from "../components/Input";
import ButtonWrapper from "../components/ButtonWrapper";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TopScreenStateType } from "./type";
import { RootStackParamList } from "../pageType";
import {
  togglePrice,
  toggleStation,
  toggleNow,
  setHotpepperDatas,
} from "./slice";
import { fetchData } from "../fetchHotpepper";

const SelectPrice: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const isNow = useSelector((state: TopScreenStateType) => state.isNow);
  const station = useSelector((state: TopScreenStateType) => state.station);

  const onConfirm = async () => {
    const shops = await fetchData(isNow, station);
    dispatch(setHotpepperDatas(shops));
    navigation.navigate("Map");
  };
  return (
    <View>
      <Input inputType={"price"} placeholder="1000" />
      <ButtonWrapper
        onBack={() => dispatch(togglePrice())}
        onConfirm={() => {
          onConfirm();
        }}
      />
    </View>
  );
};

export default SelectPrice;
