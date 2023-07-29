import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Button from "../components/Button";
import { TopScreenStateType } from "./type";
import { useDispatch } from "react-redux";
import { togglePrice, toggleStation, toggleNow } from "./slice";

const SelectSpot: React.FC = () => {
  const dispatch = useDispatch();

  const selectNow = () => {
    dispatch(toggleNow(true));
    dispatch(togglePrice());
  };

  const selectAnother = () => {
    dispatch(toggleNow(false));
    dispatch(toggleStation());
  };

  return (
    <View style={styles.buttonContainer}>
      <Button
        title={"今いるところ"}
        width={125}
        height={40}
        fontSize={16}
        onPress={() => selectNow()}
      />
      <Button
        title={"別なところ"}
        width={125}
        height={40}
        fontSize={16}
        onPress={() => selectAnother()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default SelectSpot;
