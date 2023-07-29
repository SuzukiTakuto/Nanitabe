import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
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
        style={styles.input}
        onChangeText={(text) =>
          inputType === "station"
            ? dispatch(setStation(text))
            : dispatch(setPrice(Number(text)))
        }
        placeholder={placeholder}
        placeholderTextColor={"#6750A4"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 270,
    height: 55,
    borderWidth: 1,
    borderColor: "#6750A4",
    borderRadius: 4,
    padding: 16,
  },
});

export default Input;
