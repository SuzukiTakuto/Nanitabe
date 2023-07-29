import React from "react";
import Input from "../components/Input";
import ButtonWrapper from "../components/ButtonWrapper";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TopScreenStateType } from "./type";
import { togglePrice, toggleStation, toggleNow } from "./slice";
import { fetchData } from "../fetchHotpepper";

const SelectPrice: React.FC = () => {
  const dispatch = useDispatch();

  const onConfirm = async () => {
    console.log("confirm");
    await fetchData();
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
