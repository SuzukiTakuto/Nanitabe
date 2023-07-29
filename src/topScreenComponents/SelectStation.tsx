import React from "react";
import Input from "../components/Input";
import ButtonWrapper from "../components/ButtonWrapper";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TopScreenStateType } from "./type";
import { togglePrice, toggleStation, toggleNow } from "./slice";

const SelectStation: React.FC = () => {
  const dispatch = useDispatch();

  const station = useSelector((state: TopScreenStateType) => state.station);

  const onConfirm = () => {
    // 駅名が入力されていない場合は、return
    if (station === "") {
      return;
    }
    dispatch(toggleStation());
    dispatch(togglePrice());
  };
  return (
    <View>
      <Input inputType={"station"} placeholder="駅名" />
      <ButtonWrapper
        onBack={() => dispatch(toggleStation())}
        onConfirm={() => {
          onConfirm();
        }}
      />
    </View>
  );
};

export default SelectStation;
