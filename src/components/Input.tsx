import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { setStation, setPrice } from "../topScreenComponents/slice";

type Props = {
  inputType: string;
  placeholder: string;
};

const Input = (props: Props) => {
  const { inputType, placeholder } = props;
  const dispatch = useDispatch();

  return (
    <View>
      <TextInput
        onChangeText={(text) =>
          inputType === "station"
            ? dispatch(setStation(text))
            : dispatch(setPrice(Number(text)))
        }
        placeholder="駅名"
      />
    </View>
  );
};

export default Input;
